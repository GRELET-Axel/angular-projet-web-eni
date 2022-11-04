import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs';
import { Participant } from 'src/app/models/Participant';
import { ParticipantService } from 'src/_services/participant/participant.service';

@Component({
  selector: 'app-liste-participants-sortie',
  templateUrl: './liste-participants-sortie.component.html',
  styleUrls: ['./liste-participants-sortie.component.css']
})
export class ListeParticipantsSortieComponent implements OnInit {

  public displayedColumns = ['prenom', 'nom'];
  participants: Participant[] = [];
  participant !: Participant;

  public dataSource = new MatTableDataSource<Participant>();

  constructor(
    private participantService: ParticipantService,

  ) {
  }

  ngOnInit(): void {
    this.lister()
  }

  lister() {
    this.participantService.getParticipants()
      .pipe(first())
      .subscribe(
        value => {
          this.participants = value
          this.dataSource.data = this.participants;
        });
  }

}