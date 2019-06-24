import { Jeu, Categorie, ACCESSIBILITE } from "./jeu.model";


export class StaticDatasource {
    private _data: Jeu[];

    constructor() {
        this._data = new Array<Jeu>(
            new Jeu(1,"7wonders",new Categorie("Jeu gestion de ressources"),2,10,2,7,20),
            new Jeu(2,"Pandémie",new Categorie("Coopératif"),4,10,2,7,20),
            new Jeu(3,"Colt Express",new Categorie("Jeu de programmation"),5,10,2,6,40),
            new Jeu(4,"Double",new Categorie("Jeu de Carte"),2,10,2,6,40)
        );
    }

    get data(): Jeu[] {
        return this._data;
    }
}