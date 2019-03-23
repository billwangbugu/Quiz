import { Quiz } from "./quiz.model";

export interface AppState {
  readonly score: number;
  readonly currentId: number;
  readonly quizData: Quiz[];
}
