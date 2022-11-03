import { Inject, inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Participant } from 'src/app/models/Participant';
import { coerceBooleanProperty } from '@angular/cdk/coercion';


const AUTH_API = +'http://localhost:8000/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localstorageKeys = {
    isLoggedIn: "isLoggedIn"
  }
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(coerceBooleanProperty(localStorage.getItem(this.localstorageKeys.isLoggedIn)));
  public sortie_id:number = 0;
  constructor(private http: HttpClient)  { }

  login(email: string, password: string): Observable<any> {
    return this.http.post('https://localhost:8000/api/login_check', {
      email,
      password
    }, httpOptions);
  }
  displaySortie(sortie_id: number){
    this.sortie_id = sortie_id
  }
  
  register(email: string, password: string, nom: string, prenom: string, telephone: string, administrateur: boolean, campus_id: number): Observable<any> {
    return this.http.post('https://localhost:8000/api/register', {
      email,
      password,
      nom,
      prenom,
      telephone,
      administrateur,
      campus_id
    }, httpOptions);
  }

  update(participant: Participant, idUser: number): Observable<any> {
    return this.http.post('https://localhost:8000/api/participants/' + idUser, {
      participant
    }, httpOptions);
  }
}
