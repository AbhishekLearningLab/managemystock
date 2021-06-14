import { Component, OnInit } from '@angular/core';
import { MainService } from '../../core/services/main.service';

@Component({
  selector: 'app-quiz-module',
  templateUrl: './quiz-module.component.html',
  styleUrls: ['./quiz-module.component.css']
})
export class QuizModuleComponent implements OnInit {

  Questions=[];
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
      // let quiz=res["result"];
      // quiz.forEach(e=>{
      //   e.incorrect_answers.push(e.correct_answer);
      //   e.incorrect_answers.sort(()=>.5 - Math.random());
      // });
      //this.Questions=await quiz;
      this.num=0;
      this.points=0;
    });    
  }

  checkAnswer(correctAnswer:string, useranswer: string)
  {
    this.IsAnswerCorrect= correctAnswer == useranswer ? true : false;
    this.IsAnswerCorrect ? this.points += 10 : this.points -= 5;
    this.num<this.Questions.length ? this.num +=1 : null;
  }

}
