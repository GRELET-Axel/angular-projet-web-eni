import { Component, OnInit } from '@angular/core';
import { Sortie } from 'src/app/models/Sortie';
import { SortieService } from 'src/_services/sortie/sortie.service';

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

    const user_id = this.sortieService.getSorties();
    this.sortieService.getSorties()
      .subscribe(
        (        value: any) => {
          this.sortie = value,
          console.log(this.sortie);
          
        });
  }

  
}
