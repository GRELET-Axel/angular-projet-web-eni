import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Sortie } from 'src/app/models/Sortie';
import { AuthService } from 'src/_services/auth/auth.service';
import { SortieService } from 'src/_services/sortie/sortie.service';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-afficher-sortie',
  templateUrl: './afficher-sortie.component.html',
  styleUrls: ['./afficher-sortie.component.css']
})
export class AfficherSortieComponent implements OnInit {

  sortie!: Sortie;
  
  constructor(
    
    private sortieService: SortieService,
    public authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {    

    this.sortieService.getSortiesById(this.authService.sortie_id)
      .subscribe(
        (        value: any) => {
          this.sortie = value,
          console.log(this.sortie);
          
        });
  }

  
  
}
