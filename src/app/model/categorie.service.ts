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
      this.dataSource.data.forEach(jeu => {
        jeu.categories.forEach(cat => { 
          console.log("recherche de ["+cat.libelle+"] dans " + this.categories.reduce(c=>return c.libelle) + " : " + this.categories.find(c => c.libelle==cat.libelle));
          
          if(!this.categories.find(c => c.libelle==cat.libelle))
            this.categories.push(cat);
          });
      });
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
