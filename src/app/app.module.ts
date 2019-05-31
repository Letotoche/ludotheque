import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListeJeuxComponent } from './jeux/listeJeux.component';
import { AppRoutingModule } from './app-routing.module';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { JeuEditComponent } from './jeux/jeu-edit/jeu-edit.component';


@NgModule({
   declarations: [
      AppComponent,
      ListeJeuxComponent,
      EmpruntComponent,
      JeuEditComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
