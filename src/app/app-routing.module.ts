import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';
import { FeedbacklistComponent } from './feedbacklist/feedbacklist.component';

const routes: Routes = [
  { path: ' ', component: HomeComponent },
  { path: 'home ', component: HomeComponent },
  { path: 'addfeedback ', component: AddfeedbackComponent },
  { path: ' feedbacklist', component: FeedbacklistComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
