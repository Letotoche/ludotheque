
export class Jeu {
    constructor(public id:number=0,
                public nom?: string,
                public editeur?: string,
                public distributeur?: string,
                public categories?: Categorie[],
                public accessibilite?: number,
                public ageMin?: number,
                public nbJoueursMin?: number,
                public nbJoueursMax?: number,
                public dureeMin?: number
                ) {};
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
