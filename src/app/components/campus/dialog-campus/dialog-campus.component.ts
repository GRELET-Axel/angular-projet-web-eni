import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campus } from 'src/app/models/Campus';
import { CampusService } from 'src/_services/campus/campus.service';

@Component({
  selector: 'app-dialog-campus',
  templateUrl: './dialog-campus.component.html',
  styleUrls: ['./dialog-campus.component.css']
})
export class DialogCampusComponent implements OnInit {
  @Input() campus!:Campus;
  creerCampusForm!:FormGroup;
  campuss: any;
  getCampusId: any;

  constructor(
                  private formBuilder: FormBuilder,
                  public dialogRef: MatDialogRef<DialogCampusComponent>,
                  @Inject(MAT_DIALOG_DATA) campus: Campus,
                  private campusService: CampusService
              ) { }


  ngOnInit(): void {
      this.campusService.getCampuss().subscribe((data: any) => { this.campuss = data.data; })
      
      this.creerCampusForm = this.formBuilder.group({
          nom: ['', [Validators.required]],
      })
  }

  ajouterCampus():void{
      if (this.creerCampusForm.valid) {
          this.creerCampusForm.value.id = this.getCampusId;
          let campuss = this.creerCampusForm.value;  
          this.campus = campuss
          console.log(campuss)
          this.campusService.addCampus(campuss.nom).subscribe({
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