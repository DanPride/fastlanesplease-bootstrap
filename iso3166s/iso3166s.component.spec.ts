/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Iso3166sComponent } from './iso3166s.component';

describe('Iso3166sComponent', () => {
  let component: Iso3166sComponent;
  let fixture: ComponentFixture<Iso3166sComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iso3166sComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso3166sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
