import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/_services/auth/auth.service';
import { TokenStorageService } from 'src/_services/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  // roles: string[] = [];

  constructor(private authService: AuthService,private router: Router, public tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    
   if(this.tokenStorage.getToken()){
    this.tokenStorage.signOut();
    // TODO requetes api pour kill le token
   // this.isLoggedIn = false;
   }
  }

  onSubmit(): void {
    const { username, password } = this.form;


    
    this.authService.login(username, password).subscribe(
      data => {
        if(data.code == "200" && data.token && data.user_id){
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data.user_id);
          //this.isLoginFailed = false;
         // this.isLoggedIn = true;
        }
        else{
          //TODO Invalide password/email, afficher une erreure
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }

    );

    this.router.navigate(['/accueil']);
  }

}