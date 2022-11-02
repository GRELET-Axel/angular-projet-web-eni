import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Ville } from 'src/app/models/Ville';
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjY5NDIxNzYsImV4cCI6MTY2Njk0NTc3Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoidGVzdEB0ZXN0LmZyIn0.PrBYODvqG1MUML5SUsISVm80lfzAK1Ci3Zramg3jg_kbILL7cqO8hOtgYG8tJ1kw2-nFKliONr0HnzDhKBJfUq9hmhKDBQa4MntgVnVqpwItWspGx-ITKtPgADEPQdRAfcXYxbDNGXYCW8d2I2wUSL-O7fCLOQcqRvuLJQiLw9amoacFYJ7r9dm0LIC9DtoKifggsbvr1zRfAh_Uw3sYUaO6JQivDUiYF1CzUwFOWNwwLqM4BhA0GB8ts5qPFkiDrltKeRxqE33_Wf8JMfe6Z0cSkBXpH7-w-wDlhCUUcxaJR-N1OJ1OhAcNKFigit_HfmLwq6FyKVqhskATXtgK9w"



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private httpClient: HttpClient) { }
  ville !: Ville

  /**
   * Récupération des villes de l'API
   */
  public getVilles(): Observable<Ville[]> {
    return this.httpClient.get<Ville[]>('https://localhost:8000/api/villes.json', httpOptions);
  }

    /**
   * Supprimer une ville de l'API
   */
  public deleteVille(idVille: number): Observable<Ville> {
    return this.httpClient.delete<Ville>('https://localhost:8000/api/villes/' + idVille , httpOptions);
  }

    /**
   * Ajouter une ville de l'API
   */
    public addVille(nom: string, codePostal: number): Observable<Ville> {
     return this.httpClient.post<Ville>('https://localhost:8000/api/villes',{
      nom,
      codePostal
     }, httpOptions);
    }

    public updateVille(id : number, nom: string, codePostal: number): Observable<Ville> {
      return this.httpClient.put<Ville>('https://localhost:8000/api/villes/' + id,{
        nom,
        codePostal
      }, httpOptions);
      }
}
