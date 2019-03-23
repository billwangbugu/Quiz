import { Action } from "@ngrx/store";
// import { Quiz } from "../quiz.model";
import * as QuestionActions from "./../actions/question.action";

const initialId: number = 1;

export function questionReducer(
  state: number = initialId,
  action: QuestionActions.Actions
) {
  switch (action.type) {
    case QuestionActions.UPDATE_QUESTION:
      state++;
      return state;

    default:
      return state;
  }
}
