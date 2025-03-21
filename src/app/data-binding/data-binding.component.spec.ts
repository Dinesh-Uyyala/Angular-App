import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingComponent } from './data-binding.component';

describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize num1, num2, and sum to 0', () => {
    expect(component.num1).toBe(0);
    expect(component.num2).toBe(0);
    expect(component.sum).toBe(0);
  });

  it('should correctly add num1 and num2 and update sum', () => {
    component.num1 = 8;
    component.num2 = 12;
    component.calculate();
    expect(component.sum).toBe(20);
  });

  it('should log num1, num2, and sum when calculate() is called', () => {
    spyOn(console, 'log');
    component.num1 = 5;
    component.num2 = 15;
    component.calculate();
    expect(console.log).toHaveBeenCalledWith(5, 15);
    expect(console.log).toHaveBeenCalledWith(20);
  });

  it('should display the correct sum in the template', () => {
    component.num1 = 3;
    component.num2 = 7;
    component.calculate();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Result: 10');
  });

  it('should show an alert when submit() is called', () => {
    spyOn(window, 'alert');
    component.submit();
    expect(window.alert).toHaveBeenCalledWith('You have clicked the button !');
  });

  it('should show an alert when typing() is called', () => {
    spyOn(window, 'alert');
    component.typing();
    expect(window.alert).toHaveBeenCalledWith('You are typing !');
  });

  it('should disable the calculate button if num1 or num2 is empty', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');

    component.num1 = 0;
    component.num2 = 0;
    fixture.detectChanges();
    expect(button.disabled).toBeTrue();

    component.num1 = 5;
    component.num2 = 10;
    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
  });
});
