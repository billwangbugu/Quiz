import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

export const UPDATE_QUESTION = "[QUESTION] Update";

export class UpdateQuestion implements Action {
  readonly type = UPDATE_QUESTION;

  constructor(public payload: number) {}
}

export type Actions = UpdateQuestion;
