import { Component, OnInit, ViewChild } from '@angular/core';
import { Sortie } from '../../models/Sortie';
import { SortieService } from '../../../_services/sortie/sortie.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  public displayedColumns = ['nomSortie', 'dateSortie', 'dateCloture', 'inscritPlace', 'etat', 'inscrit', 'organisateur', 'actions'];
  sorties: Sortie[] = [];
  currentDateFormated: string = "";
  public dataSource = new MatTableDataSource<Sortie>();
  

  sortFunction: ((data: Sortie[], sort: MatSort) => Sortie[]) | undefined;
  titre = '';

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private sortieService: SortieService
    ) { }

  ngOnInit(): void {
    
    const date = new Date();
    this.currentDateFormated = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
    this.lister();
  }

  lister(){
    this.sortieService.getSorties()
      .pipe(first())
      .subscribe(
        value => {
          console.log(value)
          this.sorties = value
          this.dataSource.data = this.sorties;
          console.log(this.sorties)
        })
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
