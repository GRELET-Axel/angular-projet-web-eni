import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ville } from 'src/app/models/Ville';
import { VilleService } from 'src/_services/ville/ville.service';

@Component({
  selector: 'app-dialog-ville',
  templateUrl: './dialog-ville.component.html',
  styleUrls: ['./dialog-ville.component.css']
})
export class DialogVilleComponent implements OnInit {

  @Input() ville!:Ville;
  creerVilleForm!:FormGroup;
  villes: any;
  getVilleId: any;

  constructor(
                  private formBuilder: FormBuilder,
                  public dialogRef: MatDialogRef<DialogVilleComponent>,
                  @Inject(MAT_DIALOG_DATA) ville: Ville,
                  private villeService: VilleService
              ) { }


  ngOnInit(): void {
      this.villeService.getVilles().subscribe((data: any) => { this.villes = data.data; })
      
      this.creerVilleForm = this.formBuilder.group({
          nom: ['', [Validators.required]],
          codePostal: ['', [Validators.required]],
      })
  }

  ajouterVille():void{
      if (this.creerVilleForm.valid) {
          this.creerVilleForm.value.id = this.getVilleId;
          let villes:any = this.creerVilleForm.value;  
          this.villeService.addVille(villes).subscribe({
              next:()=>{
                  this.dialogRef.close('add');  
              },
              error:()=>{
                  this.dialogRef.close('add');
              }
          });
      }
  }

  onNoClick(): void {
      this.dialogRef.close();
  }
}