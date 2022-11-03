import { Component, OnInit, ViewChild } from '@angular/core';
import { Sortie } from '../../models/Sortie';
import { SortieService } from '../../../_services/sortie/sortie.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, first } from 'rxjs';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { LoginComponent } from '../login/login.component';
import { ProfilService } from 'src/_services/profil/profil.service';
import { TokenStorageService } from 'src/_services/auth/token-storage.service';
import { Participant } from '../../models/Participant';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthService } from '../../../_services/auth/auth.service';
import { DialogSortieAjoutComponent } from './dialog-sortie-ajout/dialog-sortie-ajout.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogSortieModifComponent } from './dialog-sortie-modif/dialog-sortie-modif.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  isLoggedInhere$: BehaviorSubject<boolean> | undefined;
  public displayedColumns = ['nomSortie', 'dateSortie', 'dateCloture', 'inscritPlace', 'etat', 'inscrit', 'organisateur', 'actions'];
  sorties: Sortie[] = [];
  currentDateFormated: string = "";
  nameUser: string = "";
  currentUserId: number = 0;
  currentUserSorties: Sortie[] = [];
  roles: Array<any> = [];
  public dataSource = new MatTableDataSource<Sortie>();
  isLoggedIn: boolean = false;
  isLogged: boolean = true;

  sortFunction: ((data: Sortie[], sort: MatSort) => Sortie[]) | undefined;
  titre = '';

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  constructor(

    private router: Router,
    private sortieService: SortieService,
    private profilService: ProfilService,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    public dialog: MatDialog
    ) { 
      this.authService.isLoggedIn.subscribe(value=>{
        this.isLogged = value
      })
     }

  logincomponent: LoginComponent | undefined;
  ngOnInit(): void {

    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['login'])
    }else{
      let token = this.tokenStorageService.getToken()?this.tokenStorageService.getToken():null
      let tokenDecoded = token != null?Buffer.from(token.split('.')[1], 'base64').toString('binary'):''
      
      this.roles = JSON.parse(tokenDecoded).roles
    }
    

    const user_id = this.tokenStorageService.getUser();
    const date = new Date();
    this.currentDateFormated = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
    this.profilService.getUsers(user_id)
      .subscribe(
        (value: any) => {
          this.currentUserId = value.id
          this.currentUserSorties = value.inscrit
          this.nameUser = value.prenom + '.' + value.nom.substr(0,1).toUpperCase()
        });
    this.lister();
  }

  lister(){
    this.sortieService.getSorties()
      .pipe(first())
      .subscribe(
        value => {
          this.sorties = value
          this.dataSource.data = this.sorties;
          // console.log(this.sorties)
        })
}

isParticipant(participants: Array<any>) : boolean
{
  let isSub = false
  if(participants.length > 0){
    participants.forEach(value => {
      if(value.id === this.currentUserId){
        isSub = true;
      }else{
        isSub = false;
      }
    });
  }
    return isSub;
}

isCanceled(etat: string){
  let etatInvalid = ['Annulée'];
  if(!etatInvalid.includes(etat)){
    return true
  }
  return false
}
isClosed(etat: string){
  let etatInvalid = ['Clôturée'];
  if(!etatInvalid.includes(etat)){
    return true
  }
  return false
}

isCreated(etat: string){
  let etatInvalid = ['Créée'];
  if(etatInvalid.includes(etat)){
    return true
  }
  return false
}

isOpened(etat: string){
  let etatInvalid = ['Ouverte'];
  if(etatInvalid.includes(etat)){
    return true
  }
  return false
}

isDone(etat: string){
  let etatInvalid = ['Annulée','Clôturée'];
  if(!etatInvalid.includes(etat)){
    return true
  }
  return false
}


isValidEtat(etat: string){
  let etatInvalid = ['Clôturée','Activité en cours','Passée','Annulée','Créée'];
  if(!etatInvalid.includes(etat)){
    return true
  }
  return false
}

isOrganizer(participant: Participant) : boolean
{
  let isOrga = false
  if(participant.id === this.currentUserId){
    isOrga = true
  }
  return isOrga
}

inscription(sortie: Sortie) {
    let iriSortie: Array<any> = []
    this.currentUserSorties.push(sortie)
    this.currentUserSorties.forEach(function(value){
      iriSortie.push('/api/sorties/'+value.id)
    })
    // console.log(iriSortie)
   this.sortieService.inscriptionSortie(this.currentUserId,iriSortie)
   .pipe(first())
   .subscribe(
     value => {
      window.location.reload();
     })

     
} 

isAdmin(){
  if(this.roles.includes('ROLE_ADMIN')){
    return true
  }
  return false
}

ouvrirSortie(sortie: Sortie){
  let sortieId = sortie.id
  let iriEtat = '/api/etats/2'
  this.sortieService.ouvrirSortie(sortieId,iriEtat)
 .pipe(first())
 .subscribe(
   value => {
    window.location.reload();
   })
}

cloturerSortie(sortie: Sortie){
  let sortieId = sortie.id
  let iriEtat = '/api/etats/3'
  this.sortieService.ouvrirSortie(sortieId,iriEtat)
 .pipe(first())
 .subscribe(
   value => {
    window.location.reload();
   })
}

desister(sortie: Sortie) {
  let iriSortie: Array<any> = []
  this.currentUserSorties.forEach(function(value){
    if(value.id != sortie.id){
      iriSortie.push('/api/sorties/'+value.id)
    }
  })
 this.sortieService.inscriptionSortie(this.currentUserId,iriSortie)
 .pipe(first())
 .subscribe(
   value => {
    window.location.reload();
   })
}

annuler(sortie: Sortie) {
  let sortieId = sortie.id
  let iriEtat = '/api/etats/6'
  this.sortieService.ouvrirSortie(sortieId,iriEtat)
 .pipe(first())
 .subscribe(
   value => {
    window.location.reload();
   })
}

modifier(sortie: Sortie) {
  this.lister();
  this.dialog.open(DialogSortieModifComponent, {
      width: '30%',
      data: sortie
  }).afterClosed().subscribe(res=>{
      this.lister();
  });
}


ajouter() {
  this.lister();
  this.dialog.open(DialogSortieAjoutComponent, {
      width: '30%',
      data: 'testData'
  }).afterClosed().subscribe(res=>{
      this.lister();
  });
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
}

  rafraichirListe() {
    this.dataSource.data = this.sorties;
  }

}
