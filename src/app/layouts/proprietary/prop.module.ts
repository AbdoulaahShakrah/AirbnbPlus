import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropRoutingModule } from './prop-routing.module';
import { FormComponent } from './form/form.component';
import { PropNavbarComponent } from './shared-components/prop-navbar/prop-navbar.component';
import { PropFooterComponent } from './shared-components/prop-footer/prop-footer.component';
import { FormContentComponent } from './form/form-content/form-content.component';
import { MyproprietariesComponent } from './myproprietaries/myproprietaries.component';
import { MyproprietaryCardComponent } from './myproprietaries/myproprietary-card/myproprietary-card.component';

@NgModule({
  declarations: [
    PropNavbarComponent,
    FormComponent,
    PropFooterComponent,
    FormContentComponent,
    MyproprietariesComponent,
    MyproprietaryCardComponent
  ],
  imports: [
    CommonModule,
    PropRoutingModule,
  ],
  exports:[
    PropNavbarComponent,
    FormComponent,
    PropFooterComponent
  ]
})
export class PropModule { }