import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Jeu, ACCESSIBILITE, Categorie } from 'src/app/model/jeu.model';
import { JeuService } from 'src/app/model/jeu.service';
import { CategorieService } from 'src/app/model/categorie.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-jeu-edit',
  templateUrl: './jeu-edit.component.html',
  styleUrls: ['./jeu-edit.component.css']
})
export class JeuEditComponent implements OnInit {
  @Input() idJeu: number;
  @Input() etat: EtatEdit;
  @Output() jeuSav = new EventEmitter<Jeu>();
  
  jeuEdit: Jeu;
  ajoutCategorie: boolean;
  nouvelleCat: string;
  catLibSelect: string[];

  private accessibiliteKeys: number[];


  //Form
  jeuForm: FormGroup = this.formBuilder.group({
    nom: 'hihi',
    categorie: '',
    accessibilite: '',
    ageMin: '',
    nbJoueursMin: '',
    nbJoueursMax: '',
    dureeMin: ''
  });

  private nom: FormControl;
  private editeur: FormControl;
  private distributeur: FormControl; 
  private categorie: FormControl; 
  private accessibilite: FormControl; 
  private ageMin: FormControl; 
  private nbJoueursMin: FormControl; 
  private nbJoueursMax: FormControl; 
  private dureeMin: FormControl; 

  constructor(private jeuService:JeuService, 
              private categorieService: CategorieService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.etat = this.etat|(this.idJeu?EtatEdit.MODIFICATION:EtatEdit.CREATION);
    this.accessibiliteKeys = Array.from(ACCESSIBILITE.keys(), (v, i) => v);
    this.majEtat();
    this.majFormControl();
    this.ajoutCategorie = false;
  }

  private majFormControl() {
    this.nom = new FormControl('Bernard', Validators.required);
    this.categorie = new FormControl(this.jeuEdit.categorie, Validators.required); 
    this.accessibilite = new FormControl(this.jeuEdit.accessibilite, Validators.required); 
    this.ageMin = new FormControl(this.jeuEdit.ageMin); 
    this.nbJoueursMin = new FormControl(this.jeuEdit.nbJoueursMin, Validators.required); 
    this.nbJoueursMax = new FormControl(this.jeuEdit.nbJoueursMax, Validators.required); 
    this.dureeMin = new FormControl(this.jeuEdit.dureeMin, Validators.required); 

    this.jeuForm = new FormGroup({
      nom: this.nom,
      categorie: this.categorie,
      accessibilite: this.accessibilite,
      ageMin: this.ageMin,
      nbJoueursMin: this.nbJoueursMin,
      nbJoueursMax: this.nbJoueursMax,
      dureeMin: this.dureeMin
    });
    /*this.jeuForm = this.formBuilder.group({
      nom: '',
      categorie: '',
      accessibilite: '',
      ageMin: '',
      nbJoueursMin: '',
      nbJoueursMax: '',
      dureeMin: ''
    });*/
  }

  majNom() {
    this.nom.setValue('Bianca');
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {  
      console.log(propName);
      
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
        //this.jeuEdit.cloner(this.jeuService.getJeu(this.idJeu));
        this.jeuService.getJeu(this.idJeu).subscribe(data => {
          this.jeuEdit = data;
          this.nom.setValue("toto")
        });
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

  sauverJeu(formValues) {
    /*this.catLibSelect.forEach(lib -> {
      this.categories.push();
    },this.jeuEdit);
    */
    console.log("sauverJeu : " + JSON.stringify(this.jeuForm.value))
    //this.jeuSav.emit(formValues);
  }
  
  ajouterCategorie() {
    this.categorieService.addCategorie(this.nouvelleCat);
    this.ajoutCategorie = false;
  }

}

export enum EtatEdit {
  CREATION=1,
  MODIFICATION=2,
  CONSULTATION=3
}