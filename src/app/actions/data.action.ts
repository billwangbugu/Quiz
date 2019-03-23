import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Quiz } from "../quiz.model";

export const GET_QUIZ = "[QUIZ] GetData";

export class GetQuit implements Action {
  readonly type = GET_QUIZ;
  constructor(public payload: Quiz) {}
}

export type Actions = GetQuit;
