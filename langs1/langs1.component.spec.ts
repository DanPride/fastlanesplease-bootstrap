/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Langs1Component } from './langs1.component';

describe('Langs1Component', () => {
  let component: Langs1Component;
  let fixture: ComponentFixture<Langs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Langs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Langs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
