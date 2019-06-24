
export class Jeu {
    constructor(public id:number=0,
                public nom?: string,
                public categorie?: Categorie,
                public accessibilite?: number,
                public ageMin?: number,
                public nbJoueursMin?: number,
                public nbJoueursMax?: number,
                public dureeMin?: number
                ) {};

    cloner(jeuClone: Jeu) {
        this.id=jeuClone.id;
        this.nom=jeuClone.nom;
        this.categorie=jeuClone.categorie;
        this.accessibilite=jeuClone.accessibilite;
        this.ageMin=jeuClone.ageMin;
        this.nbJoueursMin=jeuClone.nbJoueursMin;
        this.nbJoueursMax=jeuClone.nbJoueursMax;
        this.dureeMin=jeuClone.dureeMin;
    }
} 

export class Categorie {
    constructor(public libelle: string) {}
}

export const ACCESSIBILITE = new Map()
    .set(1,"ENFANT")
    .set(2,"DEBUTANT")
    .set(3,"CASUAL")
    .set(4,"JOUEUR")
    .set(5,"EXPERT");
