import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'property/:id', component: DetailsPageComponent},
  { path: 'result', component: ResultPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }