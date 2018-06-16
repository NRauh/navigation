import { Injectable } from '@angular/core';
import { FactorService, NavigationFactors, QuestionOneAnswers } from './factor.service';
import { Subject } from 'rxjs';

export interface NavigationRule {
  path: string;
  canVisit: (factors: NavigationFactors) => boolean;
}

@Injectable()
export class NavigationService {
  routeList: NavigationRule[] = [
    {
      path: '',
      canVisit: () => { return true },
    },
    {
      path: 'page-2',
      canVisit: (factors: NavigationFactors) => {
        if (factors.userQuestions.questionOne === QuestionOneAnswers.Answer1) {
          return true;
        }

        return false;
      },
    },
    {
      path: 'page-3',
      canVisit: (factors: NavigationFactors) => {
        if (factors.userQuestions.questionOne === QuestionOneAnswers.Answer2) {
          return true;
        }

        if (factors.userQuestions.questionOne === QuestionOneAnswers.Answer3) {
          return true;
        }

        return false;
      },
    },
  ];

  nextPage = new Subject<string>();

  constructor(private factorService: FactorService) {
    this.factorService.factors.subscribe((factors) => {
      const continueTo = this.firstApplicable('', factors);
      this.nextPage.next(continueTo);
    });
  }

  routesAfter(currentPath: string): NavigationRule[] {
    const currentPageIndex = this.routeList.findIndex((rule) => {
      return rule.path === currentPath;
    });

    if (currentPageIndex === -1) {
      return [...this.routeList];
    }

    return this.routeList.slice(currentPageIndex + 1);
  }

  firstApplicable(currentPath: string, factors: NavigationFactors): string {
    const upcomingRoutes: NavigationRule[] = this.routesAfter(currentPath);

    for (let i = 0; i < upcomingRoutes.length; i++) {
      const canVisit = upcomingRoutes[i].canVisit(Object.seal(factors));
      console.log('can go to', upcomingRoutes[i].path, canVisit);

      if (canVisit) {
        return upcomingRoutes[i].path;
      }
    }
  }

}
