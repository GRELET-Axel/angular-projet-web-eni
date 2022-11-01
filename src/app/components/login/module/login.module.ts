import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from '../login.component';


@NgModule({
  declarations: [
    LoginComponent,
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
export class LoginModule { }
