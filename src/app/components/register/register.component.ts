import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campus } from 'src/app/models/Campus';
import { AuthService } from 'src/_services/auth/auth.service';
import { CampusService } from 'src/_services/campus/campus.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    email: null,
    password: null,
    nom: null,
    prenom: null,
    telephone: null,
    administrateur: null,
    campus: null,
  };
  campuses: Campus[] | undefined;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private router: Router,private campusService: CampusService,private authService: AuthService) { }

  ngOnInit(): void {
    this.campusService.getCampuss().subscribe(
      data => {
        this.campuses = data;
        },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onSubmit(): void {
    const { email, password, nom, prenom, telephone, administrateur, campus } = this.form;
    this.authService.register(email, password, nom, prenom, telephone, administrateur, campus).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );

    this.router.navigate(['/']);

  }
}