import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-truefalsequestion',
  templateUrl: './truefalsequestion.component.html',
  styleUrls: ['./truefalsequestion.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = { _id: '', title: '', question: '', answer: '', correct: '' };
  grading = false;
  answer = 'No answer yet';
  correct;

  submitAnswer = () => {
    if (this.answer === 'No answer yet') {
      return false;
    }
    this.grading = true;
    if (this.answer === this.question.correct) {
      this.correct = true;
    }
  }

  ngOnInit(): void {
  }

}
