import { BrowserModule }                from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [MyLibraryComponent, DynamicFormQuestionComponent, DynamicFormComponent],
  exports: [MyLibraryComponent]
})
export class MyLibraryModule { }
