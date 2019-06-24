import { Component, OnInit, Input } from '@angular/core';
import { Jeu } from 'src/app/model/jeu.model';
import { JeuService } from 'src/app/model/jeu.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-jeu-fiche',
  templateUrl: './jeu-fiche.component.html',
  styleUrls: ['./jeu-fiche.component.css']
})
export class JeuFicheComponent implements OnInit {

  jeu: Jeu;

  constructor(private jeuService: JeuService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('fiche id ' + this.route.snapshot.paramMap.get('id'));
    this.jeuService.getJeu(+this.route.snapshot.paramMap.get('id')).subscribe(
      data => this.jeu = data,
      error => {
        console.error("Oups")
      }
    );
  }

}
