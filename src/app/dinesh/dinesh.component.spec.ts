/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DineshComponent } from './dinesh.component';

describe('DineshComponent', () => {
  let component: DineshComponent;
  let fixture: ComponentFixture<DineshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DineshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DineshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
