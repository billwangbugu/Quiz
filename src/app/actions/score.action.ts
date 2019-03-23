import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

export const UPDATE_SCORE = "[SCORE] Update";

export class UpdateScore implements Action {
  readonly type = UPDATE_SCORE;

  constructor(public payload: number) {}
}

export type Actions = UpdateScore;
