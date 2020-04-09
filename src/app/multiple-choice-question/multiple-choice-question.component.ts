import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = { _id: '', title: '', question: '', choices: [], answer: '', correct: '' };
  grading = false;
  answer = 'No answer yet';
  correct;

  submitAnswer = () => {
    if (this.answer === 'No answer yet') {
      return;
    }
    this.grading = true;
    if (this.answer === this.question.correct) {
      this.correct = true;
    }
  }

  ngOnInit(): void {
  }

}
