import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
// import {QuizzesComponent} from './quizzes/quizzes.component';
// import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  // {path: 'quizzes/:qid', component: QuizComponent},
  // {path: 'quizzes', component: QuizzesComponent},
  {path: '', redirectTo: '/table/courses', pathMatch: 'full'},
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'course-viewer/courses/:courseId/modules', component: CourseViewerComponent},
  {path: 'course-viewer/courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent},
  {path: 'course-viewer/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent},
  {path: 'course-viewer/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
