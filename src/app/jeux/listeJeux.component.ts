import { Component, OnInit } from '@angular/core';

import { Jeu, ACCESSIBILITE } from '../model/jeu.model';
import { EtatEdit } from './jeu-edit/jeu-edit.component';
import { JeuService } from '../model/jeu.service';

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

  ngOnInit() {
    this.jeux = this.jeuService.getJeux();
  }

  getJeux(): Jeu[] {
    return this.jeux;
  }

  getNbJeux(): number {
    return this.jeux.length;
  }

  sauver(jeu: Jeu) {
      this.jeuService.saveJeu(jeu);
      this.jeux = this.jeuService.getJeux();
  }

  supprimer(idJeu: number) {
    this.jeuService.deleteJeu(idJeu);
    this.jeux = this.jeuService.getJeux();
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
