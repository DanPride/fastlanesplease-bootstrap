/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LangerrsComponent } from './langerrs.component';

describe('LangerrsComponent', () => {
  let component: LangerrsComponent;
  let fixture: ComponentFixture<LangerrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangerrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangerrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
