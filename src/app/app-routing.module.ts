import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeJeuxComponent } from './jeux/listeJeux.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { JeuFicheComponent } from './jeux/jeu-fiche/jeu-fiche.component';
import { JeuCreateFormComponent } from './jeux/jeu-create-form/jeu-create-form.component';

const routes: Routes = [
  { path: 'jeu/fiche/:id', component: JeuFicheComponent},
  { path: 'jeu/create', component: JeuCreateFormComponent},
  { path: 'jeu/liste', component: ListeJeuxComponent },
  { path: 'emrpunts', component: EmpruntComponent },
  { path: '', component: ListeJeuxComponent },
  { path: '**', component: ListeJeuxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
