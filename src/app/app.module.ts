import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageOneComponent } from './pages/PageOne';
import { ReactiveFormsModule } from '@angular/forms';
import { PageTwoComponent } from './pages/PageTwo';
import { PageThreeComponent } from './pages/PageThree';
import { FactorService } from './pages/factor.service';
import { NavigationService } from './pages/navigation.service';

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent,
  },
  {
    path: 'page-2',
    component: PageTwoComponent,
  },
  {
    path: 'page-3',
    component: PageThreeComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [
    FactorService,
    NavigationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
