import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ville } from 'src/app/models/Ville';
import { VilleService } from 'src/_services/ville/ville.service';

@Component({
  selector: 'app-dialog-ville-modif',
  templateUrl: './dialog-ville-modif.component.html',
  styleUrls: ['./dialog-ville-modif.component.css']
})
export class DialogVilleModifComponent implements OnInit {
  @Input() ville!:Ville;
  modifierVilleForm!:FormGroup;

  constructor(
                  private formBuilder: FormBuilder,
                  public dialogRef: MatDialogRef<DialogVilleModifComponent>,
                  @Inject(MAT_DIALOG_DATA) public editData: Ville,
                  private villeService: VilleService
              ) { }
  
  ngOnInit(): void {
      this.modifierVilleForm = this.formBuilder.group({
          nom: ['', Validators.required],
          codePostal: ['', Validators.required],
      });

      if(this.editData){
          this.modifierVilleForm.controls['nom'].setValue(this.editData.nom);
          this.modifierVilleForm.controls['codePostal'].setValue(this.editData.codePostal);
      }
  }

  modifierVille():void{
      if(this.modifierVilleForm.valid){
        let ville: Ville = this.modifierVilleForm.value;  
          ville.id = this.editData.id;
          this.villeService.updateVille(ville.id, ville.nom, Number(ville.codePostal)).subscribe({
          next:()=>{
              this.dialogRef.close('mod');  
          },
          error:()=>{
              this.dialogRef.close('mod');
          }
          });
      }
  }

}