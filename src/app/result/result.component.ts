import { Component, OnInit } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "./../app.state";

import { DataService } from "../service/dataService";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"],
  providers: [DataService]
})
export class ResultComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.score = store.select("score");
    this.numQuestions = store.select("currentId");
  }
  score: Observable<number>;
  numQuestions: Observable<number>;

  ngOnInit() {}
}
