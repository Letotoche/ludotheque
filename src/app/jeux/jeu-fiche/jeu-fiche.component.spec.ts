/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JeuFicheComponent } from './jeu-fiche.component';

describe('JeuFicheComponent', () => {
  let component: JeuFicheComponent;
  let fixture: ComponentFixture<JeuFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
