import { Component } from '@angular/core';
import { AuthService } from 'src/_services/auth/auth.service';
import { LoginComponent } from './components/login/login.component';
import { TokenStorageService } from '../_services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  isLogged: boolean = false;
  roles: Array<any> = [];
  constructor(private router: Router, public authService: AuthService,public tokenStorage: TokenStorageService){

    this.authService.isLoggedIn.subscribe(value=>{
      this.isLogged = value
    })

    let token = this.tokenStorage.getToken()?this.tokenStorage.getToken():null
    let tokenDecoded = token != null?Buffer.from(token.split('.')[1], 'base64').toString('binary'):''
      
    // this.roles = JSON.parse(tokenDecoded).roles
  }
  
  title = 'front-web-projet-eni';

//  logincomponent: LoginComponent | undefined;

  

  navLinks: { link: string, label: string, adminRequired: boolean }[] = [{
    link: "/",
    label: "Accueil",
    adminRequired: false
  }, {
    link: "ville",
    label: "Ville",
    adminRequired: true
  }, {
    link: "campus",
    label: "Campus",
    adminRequired: true
  }, {
    link: "profil",
    label: "Mon profil",
    adminRequired: false
  }
  ]





isAdmin(){
  if(this.roles.includes('ROLE_ADMIN')){
    return true
  }
  return false
}
  

  logout() {
    this.authService.isLoggedIn.next(false);
    this.isLogged = false;
    this.tokenStorage.signOut()
    localStorage.setItem("isLoggedIn", "false");
    location.reload();
    window.location.href="/login"
  }
}

