import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatNativeDateModule,
    RouterModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: []
})
export class RegisterModule { }
