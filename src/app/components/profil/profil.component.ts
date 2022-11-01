import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/models/Participant';
import { AuthService } from 'src/_services/auth/auth.service';
import { TokenStorageService } from 'src/_services/auth/token-storage.service';
import { ProfilService } from 'src/_services/profil/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
    nom: null,
    prenom: null,
    telephone: null
  };
  isSuccessful = false;

  participant!: Participant;
  isSignUpFailed: boolean | undefined;
  errorMessage: any;
  
  constructor(
    
    private profilService: ProfilService,
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {

    const user_id = this.tokenStorageService.getUser();
    
    this.profilService.getUsers(user_id)
      .subscribe(
        (        value: any) => {
          this.participant = value,
          console.log(this.participant);
          
        });
  }

  onSubmit(): void {
    //update 
    const { email, password, nom, prenom, telephone, } = this.form;
    console.log('test submit profil')
    console.log(this.form)
    const user_id = this.tokenStorageService.getUser();
    this.participant.email = this.form.email;
    this.participant.nom = this.form.nom;
    this.participant.prenom = this.form.prenom;
    this.participant.telephone = this.form.telephone;
    

    this.authService.update(this.participant,user_id).subscribe(
      (        data: any) => {
            console.log(data);
           this.isSuccessful = true;
           this.isSignUpFailed = false;
         },
      (          err: { error: { message: any; }; }) => {
            this.errorMessage = err.error.message;
             this.isSignUpFailed = true;
           }
    )

  }


}
