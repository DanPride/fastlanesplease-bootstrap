/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Langs2Component } from './langs2.component';

describe('Langs2Component', () => {
  let component: Langs2Component;
  let fixture: ComponentFixture<Langs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Langs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Langs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
