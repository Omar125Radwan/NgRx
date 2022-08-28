import { booksFetchAPISucess, deleteBookAPISuccess, saveBookAPISuccess, updateBookAPISuccess } from './books.action';
import { createReducer, on } from "@ngrx/store";
import { Book } from "./book";
export const initialState: ReadonlyArray<Book> = [];
export const bookReducer = createReducer(
  initialState,
  on(booksFetchAPISucess,(state, {allBooks}) => {
    return allBooks;
  }),
  on(saveBookAPISuccess, (state, {response}) => {
    let newState = [...state];
    newState.unshift(response);
    return newState;
  }),
  on(updateBookAPISuccess, (state, {response}) => {
    let newState = state.filter(_ => _.id !== response.id);
    newState.unshift(response);
    return newState;
  }),
  on(deleteBookAPISuccess, (state, {id}) => {
    let newState = state.filter(_ => _.id !== id);
    return newState;
  })
)
