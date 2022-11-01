import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { campus } from '../models/campus';

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
    public getCampuss(): Observable<campus[]> {
      return this.httpClient.get<campus[]>('https://localhost:8000/api/campuses.json', httpOptions);
    }

    /**
   * Supprimer un campus de l'API
   */
  public deleteCampus(id: number): Observable<campus> {
    return this.httpClient.delete<campus>('https://localhost:8000/api/campuses/' + id , httpOptions);
  }
  }