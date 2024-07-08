import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login/login.component';
import { SupportPageComponent } from './layouts/support-page/support-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'client', loadChildren: () => import('./layouts/client/client.module').then(m => m.ClientModule) },
  { path: 'proprietary', loadChildren: () => import('./layouts/proprietary/prop.module').then(m => m.PropModule) },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'support', component: SupportPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
