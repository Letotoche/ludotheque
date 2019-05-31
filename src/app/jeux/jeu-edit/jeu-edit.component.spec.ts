/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JeuEditComponent } from './jeu-edit.component';

describe('JeuEditComponent', () => {
  let component: JeuEditComponent;
  let fixture: ComponentFixture<JeuEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
