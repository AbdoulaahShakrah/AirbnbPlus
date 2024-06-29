import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MyPropertiesComponent } from './myproperties/myproperties.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'my-properties', component: MyPropertiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropRoutingModule { }
