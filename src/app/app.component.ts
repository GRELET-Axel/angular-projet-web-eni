import { Component } from '@angular/core';
import { AuthService } from 'src/_services/auth/auth.service';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(public authService: AuthService){

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

