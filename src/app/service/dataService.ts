import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

export interface todoData {
  question: string;
}

@Injectable()
export class DataService {
  score: number = 0;
  constructor(private http: HttpClient) {}

  url = "./assets/quizData/quizData.json";

  getData() {
    return this.http.get(this.url);
  }

  updateScore(isCorrect: boolean) {
    if (isCorrect) {
      this.score++;
    }
    console.log(this.score);
    return this.score;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
  makeIntentionalError() {
    return this.http.get("not/a/real/url").pipe(catchError(this.handleError));
  }
}
