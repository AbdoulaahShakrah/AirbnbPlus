import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { PropertyCardComponent } from './home-page/property-card/property-card.component';
import { ClientNavbarComponent } from './shared-components/client-navbar/client-navbar.component';
import { ClientFooterComponent } from './shared-components/client-footer/client-footer.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HomePageComponent,
    DetailsPageComponent,
    PropertyCardComponent,
    ClientNavbarComponent,
    ClientFooterComponent,
    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ],
  exports: [
    DetailsPageComponent,
    HomePageComponent,
    PropertyCardComponent,
    ClientNavbarComponent,  
    ClientFooterComponent 
  ]
})
export class ClientModule { }
