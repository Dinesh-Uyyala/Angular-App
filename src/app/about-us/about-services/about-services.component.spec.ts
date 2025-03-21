import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutServicesComponent } from './about-services.component';

describe('AboutServicesComponent', () => {
  let component: AboutServicesComponent;
  let fixture: ComponentFixture<AboutServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
