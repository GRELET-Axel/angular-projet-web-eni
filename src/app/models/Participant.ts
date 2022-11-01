
  export class Participant {
    constructor(
        public prenom: string ,
        public nom: string ,
        public tel: string,
        public mail: string,
        public admin: boolean,
        public actif: boolean ,
        //public registrations: Registration[];
        public password: string
       // public urlPicture: string;
    ) {}
    
  }
  