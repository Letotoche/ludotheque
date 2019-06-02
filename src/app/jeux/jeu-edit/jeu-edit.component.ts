import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Jeu, ACCESSIBILITE, Categorie } from 'src/app/model/jeu.model';
import { JeuService } from 'src/app/model/jeu.service';
import { CategorieService } from 'src/app/model/categorie.service';

@Component({
  selector: 'app-jeu-edit',
  templateUrl: './jeu-edit.component.html',
  styleUrls: ['./jeu-edit.component.css']
})
export class JeuEditComponent implements OnInit {
  @Input() idJeu: number;
  @Input() etat: EtatEdit;
  @Output() jeuSav = new EventEmitter<Jeu>();
  jeuEdit : Jeu;

  private accessibiliteKeys: number[];

  constructor(private jeuService:JeuService, private categorieService: CategorieService) { }

  ngOnInit() {
    this.etat = this.etat|(this.idJeu?EtatEdit.MODIFICATION:EtatEdit.CREATION);
    this.accessibiliteKeys = Array.from(ACCESSIBILITE.keys(), (v, i) => v);
    this.majEtat();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {  
      if(propName === 'etat' || propName === 'idJeu') {
        this.majEtat();
      }
    }
   
  }
  

  private majEtat() {    
    switch (this.etat) {
      case EtatEdit.CREATION: {
        console.log("majEtat() -> etat Création => créatoin nouveau jeu");  
        this.jeuEdit = new Jeu();
        this.jeuEdit.accessibilite = 3;
        break;
      }
      case EtatEdit.CONSULTATION:
      case EtatEdit.MODIFICATION: {
        console.log("majEtat() -> etat Modif ou consult => récupération jeu par id " + this.idJeu);        
        this.jeuEdit = new Jeu();
        this.jeuEdit.cloner(this.jeuService.getJeu(this.idJeu));
        break;
      }
    }
  }

  getCategoriesDisponibles(): Categorie[] {
    return this.categorieService.getAllCategories();
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
    return this.getAccessibilites()[ACCESSIBILITE.size - 1];
  }

  get jsonEditJeu() {
    return JSON.stringify(this.jeuEdit);
  }

  getLibEtat(): String {
    switch (this.etat) {
      case EtatEdit.CREATION: {
        return "Création";
      }
      case EtatEdit.MODIFICATION: {
        return "Modification";
      }
      case EtatEdit.CONSULTATION: {
        return "Consultation";
      }
    }
  }

  isModifiable(): boolean {
    return !(this.etat==EtatEdit.CONSULTATION);
  }

  getTitreAction():String {
    switch (this.etat) {
      case EtatEdit.CREATION: {
        return "Ajouter un nouveau jeu";
      }
      case EtatEdit.MODIFICATION: {
        return "Mofifier";
      }
      case EtatEdit.CONSULTATION: {
        return "Consulter";
      }
    }
  }

  sauverJeu() {
    this.jeuSav.emit(this.jeuEdit);
  }

}

export enum EtatEdit {
  CREATION=1,
  MODIFICATION=2,
  CONSULTATION=3
}