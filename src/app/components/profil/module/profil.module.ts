import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ProfilComponent } from '../profil.component';
import { NavbarComponent } from '../../navbar/navbar.component';


@NgModule({
  declarations: [
    ProfilComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatNativeDateModule,
    RouterModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: []
})
export class ProfilModule { }
