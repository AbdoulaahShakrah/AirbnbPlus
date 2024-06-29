import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropRoutingModule } from './prop-routing.module';
import { FormComponent } from './form/form.component';
import { PropNavbarComponent } from './shared-components/prop-navbar/prop-navbar.component';
import { PropFooterComponent } from './shared-components/prop-footer/prop-footer.component';
import { FormContentComponent } from './form/form-content/form-content.component';
import { MyPropertiesCardComponent } from './myproperties/myproperties-card/myproperties-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyPropertiesComponent } from './myproperties/myproperties.component';

@NgModule({
  declarations: [
    PropNavbarComponent,
    FormComponent,
    PropFooterComponent,
    FormContentComponent,
    MyPropertiesComponent,
    MyPropertiesCardComponent,
    FormContentComponent 
  ],
  imports: [
    CommonModule,
    PropRoutingModule,
    ReactiveFormsModule 
  ],
  exports:[
    PropNavbarComponent,
    FormComponent,
    PropFooterComponent
  ]
})
export class PropModule { } 