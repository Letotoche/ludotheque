import { Jeu, Categorie, ACCESSIBILITE } from "./jeu.model";


export class StaticDatasource {
    private _data: Jeu[];

    constructor() {
        this._data = new Array<Jeu>(
            new Jeu(1,"7wonders","Repos Prod","Asmodee",[new Categorie("Jeu de plateau")],2,10,2,7,20),
            new Jeu(2,"Pand�mie","Filosofia","Asmodee",[new Categorie("Jeu de plateau")],4,10,2,7,20),
            new Jeu(3,"Colt Express","Ludonaute","Asmodee",[new Categorie("Jeu de plateau")],5,10,2,6,40)
        );
    }

    get data(): Jeu[] {
        return this._data;
    }
}