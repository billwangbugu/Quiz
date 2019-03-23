import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./../app.state";
import { Observable } from "rxjs";
import * as ScoreActions from "./../actions/score.action";
import * as QuestionActions from "./../actions/question.action";
import * as GetQuizAction from "./../actions/data.action";
import { Quiz } from "./../quiz.model";

import { DataService } from "../service/dataService";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
  providers: [DataService]
})
export class QuizComponent implements OnInit {
  error: any;
  id: number = 1;
  currentId: Observable<number>;
  quizData: Observable<Quiz[]>;
  selectedAns: string;
  nextId: number;
  totalQuestion: number;
  correctAnsw: string;

  constructor(private service: DataService, private store: Store<AppState>) {
    this.currentId = store.select("currentId");
    this.quizData = store.select("quizData");
  }

  ngOnInit() {
    this.showData(this.id);
    this.quizData = this.store.select("quizData");
  }

  showData(id: number) {
    this.service
      .getData()
      // resp is of type `HttpResponse<Config>`
      .subscribe(
        (data: any) => {
          this.getQuizData(data.find(q => q.id == id));

          this.totalQuestion = data ? data.length : 0;

          this.correctAnsw = data.find(q => q.id == id).CorrectAnswer;

          this.id = id;

          this.nextId = this.totalQuestion > this.id ? this.id + 1 : -1;
          this.selectedAns = undefined;
        }, // success path
        error => (this.error = error) // error path
      );
  }
  onSelectionChange(optId) {
    this.selectedAns = optId;
  }
  goNext() {
    let confirmed: boolean = true;
    if (this.selectedAns == undefined) {
      confirmed = confirm(
        "You have not selected an answer. Do you want go next?"
      );
    }
    if (confirmed) {
      this.updateScore(this.selectedAns === this.correctAnsw);
      this.showData(this.nextId);
      this.quizData = this.store.select("quizData");
      this.updateQuestion();
    }
  }
  goResult() {
    this.updateScore(this.selectedAns === this.correctAnsw);
  }

  getQuizData(data: Quiz[]) {
    this.store.dispatch({
      type: GetQuizAction.GET_QUIZ,
      payload: data
    });
  }
  updateScore(isCorrect: boolean) {
    this.store.dispatch({
      type: ScoreActions.UPDATE_SCORE,
      payload: isCorrect
    });
  }

  updateQuestion() {
    this.store.dispatch({
      type: QuestionActions.UPDATE_QUESTION,
      payload: this.id
    });
  }
}
