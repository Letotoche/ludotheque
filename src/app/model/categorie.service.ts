import { Injectable } from '@angular/core';
import { StaticDatasource } from './staticDatasource.model';
import { Categorie, Jeu } from './jeu.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  
  constructor(private http: HttpClient) { 
      /*this.categories = new Array<Categorie>();
      this.categories =  this.dataSource.data
                                            .map( (jeu,idx,tab) => {return jeu.categorie} )
                                            //.reduce((acc, val) => acc.concat(val), [])
                                            .filter( (cat,idx,tab) => tab.findIndex(c => c.libelle===cat.libelle) === idx);*/  
  }

  getAllCategories():Observable<Categorie[]> {
    return this.http.get<Categorie[]>('/server/api/v1/categorieJeu');
  }

  getCategorieByLibelle(libelle: string): Categorie {
    return null;//this.categories.find(c => c.libelle === libelle);
  }

  addCategorie(libelle: string) {
    //this.categories.push(new Categorie(libelle));
  }

}
