import { Component, OnInit } from '@angular/core';
import { MainService } from '../../core/services/main.service';

@Component({
  selector: 'app-quiz-module',
  templateUrl: './quiz-module.component.html',
  styleUrls: ['./quiz-module.component.css']
})
export class QuizModuleComponent implements OnInit {

  Questions: any;
  res: Object=Object;
  IsAnswerCorrect=false;
  points=0;
  num=0;
  
  constructor(private api: MainService) { }

  ngOnInit(): void {
    this.start();
  }

  start(){
    this.Questions=[];
    this.api.getQuestions().subscribe(async res=>{
      
      this.num=0;
      this.points=0;
    });    
  }

  checkAnswer(correctAnswer:string, useranswer: string): void
  {
    this.IsAnswerCorrect= correctAnswer == useranswer ? true : false;
    this.IsAnswerCorrect ? this.points += 10 : this.points -= 5;
    this.num<this.Questions.length ? this.num +=1 : null;
  }

}
