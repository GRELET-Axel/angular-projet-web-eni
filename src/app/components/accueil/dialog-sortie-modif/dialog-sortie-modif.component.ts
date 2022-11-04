import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Sortie } from '../../../models/Sortie';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dialog-sortie-modif',
  templateUrl: './dialog-sortie-modif.component.html',
  styleUrls: ['./dialog-sortie-modif.component.css']
})
export class DialogSortieModifComponent implements OnInit {
  @Input() sortie!:Sortie;
  modifierSortieForm!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public currentSortie: Sortie
    ) { }

  ngOnInit(): void {

    this.modifierSortieForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      heureDebut: ['', [Validators.required]],
      duree: ['', [Validators.required]],
      limitDate: ['', [Validators.required]],
      nbInscritMax: ['', [Validators.required]],
      infoSortie: ['', [Validators.required]],
      campus: ['', [Validators.required]],
      lieu: ['', [Validators.required]],
      organisateur: ['', [Validators.required]],
  })


  if(this.currentSortie){
      this.modifierSortieForm.controls['nom'].setValue(this.currentSortie.nom);
      this.modifierSortieForm.controls['heureDebut'].setValue(this.currentSortie.dateHeureDebut);
      this.modifierSortieForm.controls['duree'].setValue(this.currentSortie.duree);
      this.modifierSortieForm.controls['limitDate'].setValue(this.currentSortie.dateLimiteInscription);
      this.modifierSortieForm.controls['nbInscritMax'].setValue(this.currentSortie.nbInscriptionsMax);
      this.modifierSortieForm.controls['infoSortie'].setValue(this.currentSortie.infosSortie);
      this.modifierSortieForm.controls['campus'].setValue(this.currentSortie.campus.nom);
      this.modifierSortieForm.controls['lieu'].setValue(this.currentSortie.lieu);
      this.modifierSortieForm.controls['organisateur'].setValue(this.currentSortie.organizer);
  }
  }


  modifierSortie(){
    return true
  }

}
