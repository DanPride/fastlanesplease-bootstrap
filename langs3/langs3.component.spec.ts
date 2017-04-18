/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Langs3Component } from './langs3.component';

describe('Langs3Component', () => {
  let component: Langs3Component;
  let fixture: ComponentFixture<Langs3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Langs3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Langs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
