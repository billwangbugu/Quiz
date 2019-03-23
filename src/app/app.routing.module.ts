import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultComponent } from "./result/result.component";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "quiz", component: QuizComponent },
  { path: "result", component: ResultComponent },
  { path: "", redirectTo: "/welcome", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
