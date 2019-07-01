import { Component, OnInit } from '@angular/core';

import { Jeu, ACCESSIBILITE } from '../model/jeu.model';
import { EtatEdit } from './jeu-edit/jeu-edit.component';
import { JeuService } from '../model/jeu.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-liste-jeu',
  templateUrl: './listeJeux.component.html',
  styleUrls: ['./listeJeux.component.css']
})
export class ListeJeuxComponent implements OnInit {

  public jeux: Jeu[];

  action: EtatEdit;
  idEdit: number;


  constructor(private jeuService:JeuService) { }

  private majJeux() {
    this.jeuService.getJeux().subscribe(
      data => { this.jeux = data},
      err => { 
        console.error("ListeJeuxComponent.majJeux : " + err)
        this.jeux = [];
      },
      () => console.log("ListeJeuxComponent.majJeuxjeux : " + JSON.stringify(this.jeux))
    );
  }

  ngOnInit() {
    this.majJeux();
  }

  getJeux(): Jeu[] {
    return this.jeux;
  }
 
  getNbJeux(): number {
    return (this.jeux == null)?0:this.jeux.length;
  }

  getLibelleAccessilite(valAccessilibite: number) {
    return ACCESSIBILITE.get(valAccessilibite);
  }

  sauver(jeu: Jeu) {
      this.jeuService.saveJeu(jeu);
      this.majJeux();
  }

  supprimer(idJeu: number) {
    this.jeuService.deleteJeu(idJeu);
    this.majJeux();
  }
  
  visualiser(idJeu: number) {
    this.action = EtatEdit.CONSULTATION;
    this.idEdit = idJeu;
  }
  
  editer(idJeu: number) {
    this.action = EtatEdit.MODIFICATION;
    this.idEdit = idJeu;
  }

  creer() {    
    this.action = EtatEdit.CREATION;
    this.idEdit = undefined;
  }


}
