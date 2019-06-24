import { Injectable } from '@angular/core';
import { StaticDatasource } from './staticDatasource.model';
import { Categorie, Jeu } from './jeu.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private dataSource: StaticDatasource;
  private categories: Categorie[] = [];
  
  constructor() { 
    this.dataSource = new StaticDatasource();
      this.categories = new Array<Categorie>();
      this.categories =  this.dataSource.data
                                            .map( (jeu,idx,tab) => {return jeu.categorie} )
                                            //.reduce((acc, val) => acc.concat(val), [])
                                            .filter( (cat,idx,tab) => tab.findIndex(c => c.libelle===cat.libelle) === idx);  
    }

  getAllCategories():Categorie[] {
    let liste: Categorie[];
    liste = this.categories;
    liste.sort( (c1, c2) => c1.libelle.localeCompare(c2.libelle) );
    return liste;
  }

  getCategorieByLibelle(libelle: string): Categorie {
    return this.categories.find(c => c.libelle === libelle);
  }

  addCategorie(libelle: string) {
    this.categories.push(new Categorie(libelle));
  }

}
