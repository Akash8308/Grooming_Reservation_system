import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonloginComponent } from './salonlogin.component';

describe('SalonloginComponent', () => {
  let component: SalonloginComponent;
  let fixture: ComponentFixture<SalonloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonloginComponent]
    });
    fixture = TestBed.createComponent(SalonloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
