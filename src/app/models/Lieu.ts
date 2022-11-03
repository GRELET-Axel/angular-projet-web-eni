import { Ville } from "./Ville";

 export class Lieu {
        constructor(
            public idLieu: number,
            public nom: string,
            public rue: string,
            public latitude: number,
            public longitude: number,
            public ville: Ville
        ) { }
      }
      