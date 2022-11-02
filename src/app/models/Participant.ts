
  export class Participant {
    
    constructor(
        public id: number,
        public prenom: string ,
        public nom: string ,
        public telephone: string,
        public email: string,
        public admin: boolean,
        public actif: boolean ,
        //public registrations: Registration[];
        public password: string
       // public urlPicture: string;
    ) {}
    
  }
  