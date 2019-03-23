import { Action } from "@ngrx/store";
import { Quiz } from "../quiz.model";
import * as QuitDataAction from "./../actions/data.action";


export function quizDataReducer(
  state: Quiz[] = [],
  action: QuitDataAction.Actions
) {
  switch (action.type) {
    case QuitDataAction.GET_QUIZ:
            
       return [action.payload];
    default:
      return state;
  }
}
