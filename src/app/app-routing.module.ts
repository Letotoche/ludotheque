import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeJeuxComponent } from './jeux/listeJeux.component';
import { EmpruntComponent } from './emprunt/emprunt.component';

const routes: Routes = [
  { path: '', component: ListeJeuxComponent },
  { path: 'jeux', component: ListeJeuxComponent },
  { path: 'emrpunts', component: EmpruntComponent },
  { path: '**', component: ListeJeuxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
