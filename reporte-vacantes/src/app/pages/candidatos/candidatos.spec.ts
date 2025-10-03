import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candidatos } from './candidatos';

describe('Candidatos', () => {
  let component: Candidatos;
  let fixture: ComponentFixture<Candidatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Candidatos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Candidatos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
