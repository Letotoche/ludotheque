import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListeJeuxComponent } from './jeux/listeJeux.component';
import { AppRoutingModule } from './app-routing.module';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { LdAccessDirective } from './jeux/access.directive';


@NgModule({
   declarations: [
      AppComponent,
      ListeJeuxComponent,
      EmpruntComponent,
      LdAccessDirective
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
