import { Appstate } from './appstate';
import { createAction, props } from '@ngrx/store';
export const setAPIStatus = createAction(
  '[API] success or failure status',
  props<{apiStatus: Appstate}>()
)
