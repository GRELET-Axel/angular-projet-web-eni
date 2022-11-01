import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterModule } from './components/register/module/register.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginModule } from './components/login/module/login.module';
import { VilleModule } from './components/ville/module/ville.module';
import { CampusModule } from './components/campus/module/campus.module';
import { ProfilModule } from './components/profil/module/profil.module';
import { AccueilModule } from './components/accueil/module/accueil.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    LoginModule, 
    VilleModule,
    CampusModule,
    ProfilModule,
    AccueilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
