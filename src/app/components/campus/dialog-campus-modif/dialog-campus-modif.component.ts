import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campus } from 'src/app/models/Campus';
import { CampusService } from 'src/_services/campus/campus.service';

@Component({
  selector: 'app-dialog-campus-modif',
  templateUrl: './dialog-campus-modif.component.html',
  styleUrls: ['./dialog-campus-modif.component.css']
})
export class DialogCampusModifComponent implements OnInit {
  @Input() campus!:Campus;
  modifierCampusForm!:FormGroup;

  constructor(
                  private formBuilder: FormBuilder,
                  public dialogRef: MatDialogRef<DialogCampusModifComponent>,
                  @Inject(MAT_DIALOG_DATA) public editData: Campus,
                  private campusService: CampusService
              ) { }
  
  ngOnInit(): void {
      this.modifierCampusForm = this.formBuilder.group({
        nom: ['', Validators.required],
      });

      if(this.editData){
          this.modifierCampusForm.controls['nom'].setValue(this.editData.nom);
      }
  }

  modifierCampus():void{
      if(this.modifierCampusForm.valid){
          let campus: Campus = this.modifierCampusForm.value;  
          campus.id = this.editData.id;
          console.log(campus)
          this.campusService.updateCampus(campus.id, campus.nom).subscribe({
          next:()=>{
              this.dialogRef.close('mod');  
          },
        })
        console.log(campus)

      }
      
     }
  }