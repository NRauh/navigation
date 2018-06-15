import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <h1>Question 1</h1>

    <form [formGroup]="questionOneForm">
      <div>
        <label>
          Answer 1
          <input type="radio" value="Answer1" formControlName="questionOneAnswer">
        </label>

        <label>
          Answer 2
          <input type="radio" value="Answer2" formControlName="questionOneAnswer">
        </label>

        <label>
          Answer 3
          <input type="radio" value="Answer3" formControlName="questionOneAnswer">
        </label>
      </div>
    </form>
  `,
})
export class PageOneComponent {
  questionOneForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.questionOneForm = this.fb.group({
      questionOneAnswer: [''],
    });

    this.questionOneForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
