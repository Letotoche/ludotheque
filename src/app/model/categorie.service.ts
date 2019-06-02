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
                                            .map( (jeu,idx,tab) => {return jeu.categories} )
                                            .reduce((acc, val) => acc.concat(val), [])
                                            .filter( (cat,idx,tab) => tab.findIndex(c => c.libelle===cat.libelle) === idx);  
    }

  getAllCategories():Categorie[] {
    return this.categories;
  }

  getCategorieByLibelle(libelle: string): Categorie {
    return this.categories.find(c => c.libelle === libelle);
  }

  addCategorie(libelle: string) {
    this.categories.push(new Categorie(libelle));
  }

}
