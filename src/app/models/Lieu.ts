import { Ville } from "./Ville";

 export class Lieu {
        constructor(
            public idLieu: number,
            public nomLieu: string,
            public street: string,
            public latitude: number,
            public longitude: number,
            public ville: Ville
        ) { }
      }
      