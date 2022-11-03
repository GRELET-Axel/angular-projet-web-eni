import { Component, OnInit } from '@angular/core';
import { Sortie } from 'src/app/models/Sortie';
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
    
  ) { }

  ngOnInit(): void {    

    //const sortie_id = this.sortieService.getSorties().value = 8;
    const sortie_id = 5;
    this.sortieService.getSortiesById(sortie_id)
      .subscribe(
        (        value: any) => {
          this.sortie = value,
          console.log(this.sortie);
          
        });
  }

  
  
}
