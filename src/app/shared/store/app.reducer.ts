import { setAPIStatus } from './app.action';
import { on } from '@ngrx/store';
import { Appstate } from './appstate';
import { createReducer } from '@ngrx/store';
export const initialState: Appstate = {
  apiStatus: '',
  apiResponseMessage: ''
}
export const AppReducer = createReducer(
  initialState,
  on(setAPIStatus, (state, {apiStatus}) => {
    return apiStatus;
  })
)
