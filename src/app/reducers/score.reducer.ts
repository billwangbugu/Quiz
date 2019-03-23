import { Action } from "@ngrx/store";
import * as ScoreActions from "./../actions/score.action";

const initialScore: number = 0;

export function scoreReducer(
  state: number = initialScore,
  action: ScoreActions.Actions
) {
  switch (action.type) {
    case ScoreActions.UPDATE_SCORE:
      state = action.payload ? state + 1 : state;
      return state;
    default:
      return state;
  }
}
