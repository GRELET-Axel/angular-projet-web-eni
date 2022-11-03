import { Campus } from "./Campus";
import { Etat } from "./Etat";
import { Lieu } from "./Lieu";
import { Participant } from "./Participant";
import { Ville } from "./Ville";


export class Sortie {
  constructor(
    public id: number,
    public nom: string,
    public dateHeureDebut: string,
    public duree: number,
    public dateLimiteInscription: Date,
    public nbInscriptionsMax: number,
    public infosSortie: string,
    public ville: Ville,
    public etat: Etat,
    public urlPicture: string,
    // public registrations: Registration[],
    public lieu: Lieu,
    public campus: Campus,
    public organizer: Participant,
    public participants: Participant[],
  ) { }
}

