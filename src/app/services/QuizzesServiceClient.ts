import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch(`https://cryptic-tundra-76190.herokuapp.com/api/quizzes`)
      .then(response => response.json())
}
