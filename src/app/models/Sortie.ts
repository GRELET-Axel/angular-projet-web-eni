import { Campus } from "./Campus";
import { Etat } from "./Etat";
import { Participant } from "./Participant";


export class Sortie {
  constructor(
    public id: number,
    public nom: string,
    public date_heure_debut: string,
    public duration: number,
    public date_limite_inscription: string,
    public nbMaxRegistrations: number,
    public description: string,
    public etat: Etat,
    public urlPicture: string,
    // public registrations: Registration[],
    public location: Location,
    public campus: Campus,
    public organizer: Participant,
  ) { }
}

