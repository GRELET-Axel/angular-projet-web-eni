import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-web-projet-eni';


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
  },
  {
    link: "login",
    label: "Deconnexion"
  }
 // {
 //   link: "profil",
 //   label: "Mon profil"
 // }
  //{
  // link: '/participant/'+this.loginService.loggedUser$.value?.participantId,
   // label: "Mon profil"
  //}
  ]
}

