import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Sortie } from '../../app/models/Sortie';
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjY5NDIxNzYsImV4cCI6MTY2Njk0NTc3Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoidGVzdEB0ZXN0LmZyIn0.PrBYODvqG1MUML5SUsISVm80lfzAK1Ci3Zramg3jg_kbILL7cqO8hOtgYG8tJ1kw2-nFKliONr0HnzDhKBJfUq9hmhKDBQa4MntgVnVqpwItWspGx-ITKtPgADEPQdRAfcXYxbDNGXYCW8d2I2wUSL-O7fCLOQcqRvuLJQiLw9amoacFYJ7r9dm0LIC9DtoKifggsbvr1zRfAh_Uw3sYUaO6JQivDUiYF1CzUwFOWNwwLqM4BhA0GB8ts5qPFkiDrltKeRxqE33_Wf8JMfe6Z0cSkBXpH7-w-wDlhCUUcxaJR-N1OJ1OhAcNKFigit_HfmLwq6FyKVqhskATXtgK9w"



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class SortieService {

  constructor(private httpClient: HttpClient) { }


  /**
   * Récupération des sorties de l'API
   */
  public getSorties(): Observable<Sortie[]> {
    return this.httpClient.get<Sortie[]>('https://localhost:8000/api/sorties.json', httpOptions);
  }

  public getSortiesById(idSortie: number): Observable<Sortie[]> {
    return this.httpClient.get<Sortie[]>('https://localhost:8000/api/sorties/' + idSortie + '.json' , httpOptions);
  }

    /**
   * Supprimer une sortie de l'API
   */
  public deleteSortie(idSortie: number): Observable<Sortie> {
    return this.httpClient.delete<Sortie>('https://localhost:8000/api/sorties/' + idSortie , httpOptions);
  }

  /**
   * Supprimer une sortie de l'API
  */
    public addSortie(): Observable<Sortie> {
     return this.httpClient.post<Sortie>('https://localhost:8000/api/sorties/', httpOptions);
    }

     /**
   * edit participant pour inscription
  */
      public inscriptionSortie(idUser : number,inscrit: Sortie[]): Observable<any> {
        return this.httpClient.put<any>('https://localhost:8000/api/participants/'+idUser,{
          inscrit
        }, httpOptions);
      }
}
