import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "greet",
  template: `
    <h4>{{ greeting }}! {{ percentageScore }}%</h4>
  `
})
export class GreetingComponent implements OnInit {
  @Input() score: number;
  @Input() numQuestions: number;
  percentageScore: number;

  greeting: string = "";

  ngOnInit() {
    this.percentageScore = Math.round((100 * this.score) / this.numQuestions);
    switch (this.percentageScore) {
      case 100:
        this.greeting = "Excerlent";
        break;
      case 80:
        this.greeting = "Very Good";
        break;
      case 60:
        this.greeting = "Good";
        break;
      case 40:
        this.greeting = "Fair";
        break;
      case 20:
      case 0:
        this.greeting = "Poor";
        break;
    }
  }
}
