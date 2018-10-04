import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'lib-myLibrary',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <lib-dynamic-form [questions]="questions"></lib-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class MyLibraryComponent {

  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

}
