import { setAPIStatus } from './../../shared/store/app.action';
import { selectAppState } from './../../shared/store/app.selector';
import { Appstate } from './../../shared/store/appstate';
import { invokeSaveBookAPI } from './../store/books.action';
import { Store, select } from '@ngrx/store';
import { Book } from './../store/book';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private store: Store,
    private appStore: Store<Appstate>,
    private router: Router) { }
  bookForm: Book = {
    id: 0,
    author: '',
    title: '',
    cost: 0,
  }

  ngOnInit(): void {
  }

  save() {
    this.store.dispatch(invokeSaveBookAPI({payload: {...this.bookForm}}));
    let appStatus$ = this.appStore.pipe(select(selectAppState));
    appStatus$.subscribe((data) => {
      if(data.apiStatus === 'success') {
        this.appStore.dispatch(setAPIStatus({apiStatus: { apiStatus: '', apiResponseMessage: '' }}))
        this.router.navigate(['/']);
      }
    })
  }

}
