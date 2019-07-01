import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Categorie } from 'src/app/model/jeu.model';
import { CategorieService } from 'src/app/model/categorie.service';

@Component({
  selector: 'app-jeu-create-form',
  templateUrl: './jeu-create-form.component.html',
  styleUrls: ['./jeu-create-form.component.css']
})
export class JeuCreateFormComponent implements OnInit {

  jeuCreateForm = this.fb.group({
      nom: ['', Validators.required],
      categorie : this.fb.group({
        libelle: ['']
      }),
      accessibilite: ['3', Validators.required],
      ageMin: ['', Validators.required],
      nbJoueursMin: ['', [Validators.required, Validators.min(1)]],
      nbJoueursMax: ['', Validators.required],
      dureeMin: ['', Validators.required]
  });

  categories: Categorie[];


  constructor(private fb: FormBuilder, private categorieService: CategorieService) { }

  ngOnInit() {
    this.categorieService.getAllCategories().subscribe(
      data => { this.categories = data},
      err => {
        console.error("JeuCreateFormComponent.ngOnInit : " + err);
        this.categories = [];
      },
      () => console.log("JeuCreateFormComponent.ngOnInit : " + JSON.stringify(this.categories))
    );
  }

  creerJeu() {
    console.log(this.jeuCreateForm.value);
  }
}
