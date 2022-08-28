import { selectBooks } from './books.selector';
import { setAPIStatus } from './../../shared/store/app.action';
import { Appstate } from './../../shared/store/appstate';
import { invokeBooksAPI, booksFetchAPISucess, invokeSaveBookAPI, saveBookAPISuccess, invokeUpdateBookAPI, updateBookAPISuccess, invokeDeleteBookAPI, deleteBookAPISuccess } from './books.action';
import { BooksService } from './../books.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, withLatestFrom, EMPTY } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Injectable()

export class BooksEffects {
  constructor(private action$: Actions,
    private booksService: BooksService,
    private appStore: Store<Appstate>,
    private store: Store
    ) { }

  loadAllBooks$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeBooksAPI),
      withLatestFrom(this.store.pipe(select(selectBooks))),
      switchMap(([,booksFormStore]) => {
        if(booksFormStore.length > 0) {
          return EMPTY
        }
        return this.booksService.get()
          .pipe(
            map((data) => booksFetchAPISucess({ allBooks: data })));
      })
    )
  )

  saveNewBook$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeSaveBookAPI),
      switchMap((action) => {
        this.appStore.dispatch(setAPIStatus({apiStatus: {apiResponseMessage: '', apiStatus: ''}}))
        return this.booksService
        .create(action.payload)
        .pipe(map((data)=>{
          this.appStore.dispatch(setAPIStatus({apiStatus: {apiResponseMessage: '', apiStatus: 'success'}}))
          return saveBookAPISuccess({response: data})
        }))
      })
    )
  );

  updateBook$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeUpdateBookAPI),
      switchMap((action) => {
        this.appStore.dispatch(setAPIStatus({apiStatus: {apiResponseMessage: '', apiStatus: ''}}))
        return this.booksService
        .update(action.payload)
        .pipe(map((data)=>{
          this.appStore.dispatch(setAPIStatus({apiStatus: {apiResponseMessage: '', apiStatus: 'success'}}))
          return updateBookAPISuccess({response: data})
        }))
      })
    )
  );

  deleteBook$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeDeleteBookAPI),
      switchMap((action) => {
        this.appStore.dispatch(setAPIStatus({apiStatus: {apiResponseMessage: '', apiStatus: ''}}))
        return this.booksService
        .delete(action.id)
        .pipe(map((data)=>{
          this.appStore.dispatch(setAPIStatus({apiStatus: {apiResponseMessage: '', apiStatus: 'success'}}))
          return deleteBookAPISuccess({id: action.id});
        }))
      })
    )
  )
}
