import { Injectable } from '@angular/core';
import { StaticDatasource } from './staticDatasource.model';
import { Jeu } from './jeu.model';

@Injectable({
  providedIn: 'root'
})
export class JeuService {
  
  private dataSource: StaticDatasource;
  private jeux: Jeu[] = [];
  private locatorJeu = (jeu: Jeu, idSearch: number) => jeu.id == idSearch; 


  constructor() {
      this.dataSource = new StaticDatasource();
      this.jeux = new Array<Jeu>();
      this.dataSource.data.forEach(jeu => {
          this.jeux.push(jeu);
      });
  }

  public getJeux(): Jeu[] {
      return this.jeux;
  }

  public getJeu(id: number) {
    console.log("getJeu() -> id : " + id);
    return this.jeux.find(j => this.locatorJeu(j, id));
  }

  public saveJeu(jeu:Jeu) {
    if(jeu.id == null || jeu.id ==0) {
        jeu.id = this.generateId();
        this.jeux.push(jeu);
    } else {
        let idxJeuExist: number = this.jeux.findIndex(j => this.locatorJeu(j, jeu.id));
        this.jeux.splice(idxJeuExist,1,jeu);
    }
  }

  deleteJeu(id: number) {
    this.jeux.splice(this.jeux.indexOf(this.getJeu(id)),1);
  }

  private generateId(): number {
      let idRetour = 0;
      this.jeux.forEach(j => {if(j.id > idRetour) { idRetour = j.id}});
      idRetour++;
      return idRetour;
  }
}
