import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Participant } from 'src/app/models/Participant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(idParticpant: number): Observable<Participant> {
    return this.httpClient.get<Participant>('https://localhost:8000/api/participants/' + idParticpant);
  }

}
