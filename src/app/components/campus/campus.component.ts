import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Campus } from 'src/app/models/Campus';
import { CampusService } from 'src/_services/campus/campus.service';


@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {
  public displayedColumns = ['nomCampus', 'actions'];
  campuss: Campus[] = [];
  public dataSource = new MatTableDataSource<Campus>();

  sortFunction: ((data: Campus[], sort: MatSort) => Campus[]) | undefined;
  titre = '';

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private campusService: CampusService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.lister()
  }

  lister() {
    this.campusService.getCampuss()
      .pipe(first())
      .subscribe(
        value => {
          this.campuss = value
          this.dataSource.data = this.campuss;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
  }

  supprimer(campus: Campus) {
    this.campusService.deleteCampus(campus.id).subscribe(
      value => {

          let index = -1
          for (let j = 0; j < this.campuss.length; j++) {
            if (this.campuss[j].id === campus.id) {
              index = j;
              this.campuss.splice(index, 1);
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
    this.dataSource.data = this.campuss;
  }
}