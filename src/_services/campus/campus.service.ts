import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Campus } from 'src/app/models/Campus';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  
  
  @Injectable({
    providedIn: 'root'
  })
  export class CampusService {
  
    constructor(private httpClient: HttpClient) { }
  
    /**
     * Récupération des campus de l'API
     */
    public getCampuss(): Observable<Campus[]> {
      return this.httpClient.get<Campus[]>('https://localhost:8000/api/campuses.json', httpOptions);
    }
    
    /**
   * Supprimer un campus de l'API
   */
  public deleteCampus(id: number): Observable<Campus> {
    return this.httpClient.delete<Campus>('https://localhost:8000/api/campuses/' + id , httpOptions);
  }
  

  public addCampus(nom: string): Observable<Campus> {
  return this.httpClient.post<Campus>('https://localhost:8000/api/campuses/',{
    nom
  }, httpOptions);
  }

  public updateCampus(id : number, nom: string): Observable<Campus> {
    return this.httpClient.put<Campus>('https://localhost:8000/api/campuses/' + id,{
    nom
    }, httpOptions);
    }
}