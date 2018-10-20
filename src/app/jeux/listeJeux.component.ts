import { Component, OnInit } from '@angular/core';

import { Jeu, ACCESSIBILITE } from '../model/jeu.model';
import { JeuRepository } from '../model/jeuRepository.model';

@Component({
  selector: 'app-listeJeux',
  templateUrl: './listeJeux.component.html',
  styleUrls: ['./listeJeux.component.css']
})
export class ListeJeuxComponent implements OnInit {

  private repoJeu: JeuRepository;
  public jeux: Jeu[];
  public jeuEdit: Jeu;
  private accessibiliteKeys: number[]; 
  model;
  constructor() { }

  ngOnInit() {    
    this.repoJeu = new JeuRepository();
    this.jeux = this.repoJeu.getJeux();
    this.jeuEdit = new Jeu();
    this.accessibiliteKeys = Array.from(ACCESSIBILITE.keys(),(v, i)=>v);
    this.model=1;
  }

  getJeux(): Jeu[] {
    return this.jeux;
  }

  getNbJeux(): number {
    return this.jeux.length;
  }

  getAccessibilites() {
    return this.accessibiliteKeys;
  }

  get accesbiliteVal() {
    return ACCESSIBILITE.get(this.jeuEdit.accessibilite);
  }
  get firstAccessibilite() {
    return this.getAccessibilites()[0];
  }

  get lastAccessibilite() {
    return this.getAccessibilites()[ACCESSIBILITE.size-1];
  }

  saveJeu(jeu: Jeu) {
      this.repoJeu.saveJeu(jeu);
  }
  
  razJeuEdit() {
    this.jeuEdit = new Jeu();
    console.log(JSON.stringify(this.jeuEdit));
  }

  majAccessibilite(acc: number) {

  }

  get jsonEditJeu() {
    return JSON.stringify(this.jeuEdit);
  }

}
