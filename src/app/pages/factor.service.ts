import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum QuestionOneAnswers {
  Answer1 = 'Answer1',
  Answer2 = 'Answer2',
  Answer3 = 'Answer3',
}

export interface Questions {
  questionOne?: QuestionOneAnswers;
}

export interface NavigationFactors {
  userQuestions: Questions;
}

const initialFactors: NavigationFactors = {
  userQuestions: {},
};

@Injectable()
export class FactorService {
  factors = new Subject<NavigationFactors>();
  currentFactors: NavigationFactors;

  constructor() {
    this.factors.subscribe((newFactors) => {
      this.currentFactors = Object.freeze(newFactors);
    });

    this.factors.next(initialFactors);
  }

  answer(question: keyof Questions, answer: any) {
    const newFactors: NavigationFactors = { ...this.currentFactors };
    newFactors.userQuestions[question] = answer;

    this.factors.next(newFactors);
  }
}
