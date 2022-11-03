import { Component, OnInit, Input } from '@angular/core';
import { Sortie } from '../../../models/Sortie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SortieService } from '../../../../_services/sortie/sortie.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CampusService } from '../../../../_services/campus/campus.service';
import { Campus } from '../../../models/Campus';
import { DatePipe } from '@angular/common';
import { TokenStorageService } from '../../../../_services/auth/token-storage.service';

@Component({
  selector: 'app-dialog-sortie-ajout',
  templateUrl: './dialog-sortie-ajout.component.html',
  styleUrls: ['./dialog-sortie-ajout.component.css'],
  providers: [DatePipe]
})
export class DialogSortieAjoutComponent implements OnInit {
  @Input() sortie!:Sortie;
  creerSortieForm!:FormGroup;
  campuses: Campus[] | undefined;
  sortieValue: any;
  constructor(
    public dialogRef: MatDialogRef<DialogSortieAjoutComponent>,
    public sortieService: SortieService,
    public campusService: CampusService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private tokenStorageService: TokenStorageService,

    ) { }

  ngOnInit(): void {
    this.campusService.getCampuss().subscribe(
      data => {
        this.campuses = data;
        }
    );
    this.creerSortieForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      heureDebut: ['', [Validators.required]],
      duree: ['', [Validators.required]],
      limitDate: ['', [Validators.required]],
      nbInscritMax: ['', [Validators.required]],
      infoSortie: ['', [Validators.required]],
      campus: ['', [Validators.required]],
      
  })
  }

ajoutSortie(){
  if (this.creerSortieForm.valid) {
    let sortieValue:any = this.creerSortieForm.value;  
    // console.log(sortieValue)
    let campusIri = '/api/campuses/'+sortieValue.campus
    let dateDebutFormated = this.datePipe.transform(sortieValue.heureDebut, 'Y-M-d H:m:s')
    let dateLimitFormated = this.datePipe.transform(sortieValue.limitDate, 'Y-M-d')
    let userId = this.tokenStorageService.getUser()
    let organizerIri = '/api/participants/'+parseInt(userId)
    if(dateDebutFormated != null && dateLimitFormated != null){
      this.sortieService.addSortie(sortieValue.nom, dateDebutFormated, sortieValue.duree, dateLimitFormated, parseInt(sortieValue.nbInscritMax), sortieValue.infoSortie, campusIri, organizerIri).subscribe({
        next:(value)=>{
            this.dialogRef.close('add');  
            window.location.reload()
        },
        error:()=>{
            this.dialogRef.close('add');
        }
    });
    }
    
}
}  

}
