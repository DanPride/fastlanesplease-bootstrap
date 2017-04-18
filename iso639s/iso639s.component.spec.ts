/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Iso639sComponent } from './iso639s.component';

describe('Iso639sComponent', () => {
  let component: Iso639sComponent;
  let fixture: ComponentFixture<Iso639sComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iso639sComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso639sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
