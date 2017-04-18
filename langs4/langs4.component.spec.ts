/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Langs4Component } from './langs4.component';

describe('Langs4Component', () => {
  let component: Langs4Component;
  let fixture: ComponentFixture<Langs4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Langs4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Langs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
