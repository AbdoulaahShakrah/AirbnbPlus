import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar o HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/login/login/login.component';
import { ClientModule } from './layouts/client/client.module';
import { PropModule } from './layouts/proprietary/prop.module';
import { FormsModule } from '@angular/forms';
import { SupportPageComponent } from './layouts/support-page/support-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SupportPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Adicionar o HttpClientModule aqui
    //tem que se instalar isto "npm install @angular/common @angular/core"
    ClientModule,
    PropModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
