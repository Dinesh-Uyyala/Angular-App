import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CapitalDirective } from './capital.directive';
import { ElementRef } from '@angular/core';

// Create a test component to apply the directive
@Component({
  template: `<input type="text" appCapital>`
})
class TestComponent {}

describe('CapitalDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, CapitalDirective]
    }).compileComponents();
    
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new CapitalDirective(new ElementRef(document.createElement('input')));
    expect(directive).toBeTruthy();
  });
});
