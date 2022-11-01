import { DecimalPipe } from '@angular/common';
import { Component, Injectable, OnInit, PipeTransform, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, tap, debounceTime, switchMap, delay, Observable, of, first } from 'rxjs';
import { Ville } from 'src/app/models/Ville';
import { VilleService } from 'src/_services/ville/ville.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css'],
  providers: [VilleService, DecimalPipe],

})
@Injectable({ providedIn: 'root' })

export class VilleComponent implements OnInit {

  public displayedColumns = ['nomVille', 'codePostal', 'actions'];
  villes: Ville[] = [];
  public dataSource = new MatTableDataSource<Ville>();

  sortFunction: ((data: Ville[], sort: MatSort) => Ville[]) | undefined;
  titre = '';

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private villeService: VilleService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.lister()
  }

  lister() {
    this.villeService.getVilles()
      .pipe(first())
      .subscribe(
        value => {
          this.villes = value
          this.dataSource.data = this.villes;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
  }

  supprimer(ville: Ville) {
    this.villeService.deleteVille(ville.id).subscribe(
      value => {

          let index = -1
          for (let j = 0; j < this.villes.length; j++) {
            if (this.villes[j].id === ville.id) {
              index = j;
              this.villes.splice(index, 1);
              break;
            }
            this.lister();
          }
        })
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
    this.dataSource.data = this.villes;
  }
}