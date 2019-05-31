import { Component, OnInit, Input } from '@angular/core';
import { Jeu } from 'src/app/model/jeu.model';

@Component({
  selector: 'app-jeu-edit',
  templateUrl: './jeu-edit.component.html',
  styleUrls: ['./jeu-edit.component.css']
})
export class JeuEditComponent implements OnInit {
  @Input() jeu: Jeu;

  constructor() { }

  ngOnInit() {
  }

}
