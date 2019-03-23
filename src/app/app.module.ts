import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./welcome/hello.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultComponent } from "./result/result.component";
import {GreetingComponent} from './result/greeting.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { scoreReducer } from "./reducers/score.reducer";
import { questionReducer } from "./reducers/question.reducer";
import {quizDataReducer } from "./reducers/data.reducer";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ 
      score: scoreReducer, 
      currentId: questionReducer,
      quizData: quizDataReducer
    }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    WelcomeComponent,
    QuizComponent,
    ResultComponent,
    GreetingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
