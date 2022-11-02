import { Component } from '@angular/core';
import { AuthService } from 'src/_services/auth/auth.service';
import { LoginComponent } from './components/login/login.component';
import { TokenStorageService } from '../_services/auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  isLogged: boolean = false;
  constructor(public authService: AuthService,public tokenStorage: TokenStorageService){
    if(this.tokenStorage.getToken()){
      this.isLogged = true;
    }
  }
  
  title = 'front-web-projet-eni';
  
//  logincomponent: LoginComponent | undefined;
  navLinks: { link: string, label: string }[] = [{
    link: "/",
    label: "Accueil"
  }, {
    link: "ville",
    label: "Ville"
  }, {
    link: "campus",
    label: "Campus"
  }, {
    link: "profil",
    label: "Mon profil"
  }
  ]
  
}

