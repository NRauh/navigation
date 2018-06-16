import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FactorService, QuestionOneAnswers } from './factor.service';

@Component({
  template: `
    <h1>Question 1</h1>

    <form [formGroup]="questionOneForm">
      <div>
        <label>
          Answer 1
          <input type="radio" [value]="answers.Answer1" formControlName="questionOneAnswer">
        </label>

        <label>
          Answer 2
          <input type="radio" [value]="answers.Answer2" formControlName="questionOneAnswer">
        </label>

        <label>
          Answer 3
          <input type="radio" [value]="answers.Answer3" formControlName="questionOneAnswer">
        </label>
      </div>
    </form>
  `,
})
export class PageOneComponent {
  questionOneForm: FormGroup;
  readonly answers = QuestionOneAnswers;

  constructor(
    private fb: FormBuilder,
    private factorService: FactorService,
  ) {
    this.questionOneForm = this.fb.group({
      questionOneAnswer: [''],
    });

    this.questionOneForm.valueChanges.subscribe((value) => {
      this.factorService.answer('questionOne', value.questionOneAnswer);
    });
  }
}
