import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListeJeuxComponent } from './jeux/listeJeux.component';
import { AppRoutingModule } from './app-routing.module';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { JeuEditComponent } from './jeux/jeu-edit/jeu-edit.component';
import { JeuFicheComponent } from './jeux/jeu-fiche/jeu-fiche.component';
import { JeuCreateFormComponent } from './jeux/jeu-create-form/jeu-create-form.component';


@NgModule({
   declarations: [
      AppComponent,
      ListeJeuxComponent,
      EmpruntComponent,
      JeuEditComponent,
      JeuFicheComponent,
      JeuCreateFormComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
