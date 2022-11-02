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
  public dataSource = new MatTableDataSource<Sortie>();
  

  sortFunction: ((data: Sortie[], sort: MatSort) => Sortie[]) | undefined;
  titre = '';

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
  
    private sortieService: SortieService,
    private profilService: ProfilService,
    private tokenStorageService: TokenStorageService
    ) { }

  logincomponent: LoginComponent | undefined;
  ngOnInit(): void {

    this.isLoggedInhere$ = this.logincomponent?.isLoggedIn$;
    //localStorage.setItem("isLoggedIn", 'false')

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
          console.log(this.sorties)
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

isOrganizer(participant: Participant) : boolean
{
  let isOrga = false
  if(participant.id === this.currentUserId){
    isOrga = true
  }
  return isOrga
}

inscription(sortie: Sortie) {
    let newSortie = {id: sortie.id,nom: sortie.nom}
    let iriSortie: Array<any> = []
    this.currentUserSorties.push(sortie)
    this.currentUserSorties.forEach(function(value){
      iriSortie.push('/api/sorties/'+value.id)
    })
    console.log(iriSortie)
   this.sortieService.inscriptionSortie(this.currentUserId,iriSortie)
   .pipe(first())
   .subscribe(
     value => {
       console.log(value)
     })
     
     window.location.reload();
} 

  supprimer(campus: Sortie) {
    // this.campusService.deleteCampus(campus.id).subscribe(
    //   value => {
      
    //       let index = -1
    //       for (let j = 0; j < this.campuss.length; j++) {
    //         if (this.campuss[j].id === campus.id) {
    //           index = j;
    //           this.campuss.splice(index, 1);
    //           break;
    //         }
    //         this.lister();
    //       }
    //     })
      }

  modifier(_t42: any) {
  throw new Error('Method not implemented.');
  }


  ajouter() {
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
