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
  navLinks: { link: string, label: string, adminRequired: boolean }[] = [{
    link: "/",
    label: "Accueil",
    adminRequired: true
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
    adminRequired: true
  }
  ]
  
  logout() {
    this.authService.isLoggedIn$.next(false);
    this.tokenStorage.signOut()
    localStorage.setItem("isLoggedIn", "false");
    location.reload();
    //this.loggedUser$.next(null)
  }
}

