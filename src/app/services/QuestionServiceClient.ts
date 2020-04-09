import { Injectable } from '@angular/core';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://cryptic-tundra-76190.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())

}
