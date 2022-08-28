import { createAction, props } from "@ngrx/store";
import { Book } from './book';
export const invokeBooksAPI = createAction(
  "[Books API] invoke books Fetch API"
)

export const booksFetchAPISucess = createAction(
  "[Books API] books fetch api success",
  props<{allBooks: Book[]}>()
)

export const invokeSaveBookAPI = createAction(
  "[Books API] invoke save books API",
  props<{payload: Book}>()
)

export const saveBookAPISuccess = createAction(
  "[Books API] save book API success",
  props<{response: Book}>()
)

export const invokeUpdateBookAPI = createAction(
  "[Books API] invoke update books API",
  props<{payload: Book}>()
)

export const updateBookAPISuccess = createAction(
  "[Books API] update books API success",
  props<{response: Book}>()
)
export const invokeDeleteBookAPI = createAction(
  "[Books API] invoke Delete books API",
  props<{id: number}>()
)

export const deleteBookAPISuccess = createAction(
  "[Books API] delete books API success",
  props<{id: number}>()
)
