import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'client', loadChildren: () => import('./layouts/client/client.module').then(m => m.ClientModule) },
  { path: 'proprietary', loadChildren: () => import('./layouts/proprietary/prop.module').then(m => m.PropModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
