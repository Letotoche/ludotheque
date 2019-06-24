import { Injectable } from '@angular/core';
import { StaticDatasource } from './staticDatasource.model';
import { Jeu, Categorie } from './jeu.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JeuService {
  
  //private dataSource: StaticDatasource;
  private jeux: Jeu[] = [];
  private locatorJeu = (jeu: Jeu, idSearch: number) => jeu.id == idSearch; 


  constructor(private http:HttpClient) {
      //this.dataSource = new StaticDatasource();
      this.jeux = new Array<Jeu>();
      /*this.dataSource.data.forEach(jeu => {
          this.jeux.push(jeu);
      });*/
  }

  public getJeux(): Observable<Jeu[]> {
      return this.http.get<Jeu[]>('/server/api/v1/jeux');
  }

  public getJeu(id: number): Observable<Jeu> {
    console.log("getJeu() -> id : " + id);
    return this.http.get<Jeu>(`/server/api/v1/jeux/${id}`);
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
    //this.jeux.splice(this.jeux.indexOf(this.getJeu(id)),1);
  }

  private generateId(): number {
      let idRetour = 0;
      this.jeux.forEach(j => {if(j.id > idRetour) { idRetour = j.id}});
      idRetour++;
      return idRetour;
  }
}
