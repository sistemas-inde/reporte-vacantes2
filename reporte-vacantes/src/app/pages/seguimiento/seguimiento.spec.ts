import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seguimiento } from './seguimiento';

describe('Seguimiento', () => {
  let component: Seguimiento;
  let fixture: ComponentFixture<Seguimiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Seguimiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seguimiento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
