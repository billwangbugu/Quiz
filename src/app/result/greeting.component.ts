import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'greet',
  template: `<h4> {{ greeting }}!</h4>`
})
export class GreetingComponent implements OnInit {
  @Input() score: number;
  greeting:string = "";

  ngOnInit(){
    switch(this.score){
      case 5:
        this.greeting = "Excerlent";
        break;
      case 4:
        this.greeting = "Very Good";
        break;
      case 3:
        this.greeting = "Good";
        break;
      case 2:
        this.greeting = "Fair";
        break;
      case 1:
      case 0:
        this.greeting = "Poor";
        break;     
    }
  }


}
