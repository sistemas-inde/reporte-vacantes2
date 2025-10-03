import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalogos } from './catalogos';

describe('Catalogos', () => {
  let component: Catalogos;
  let fixture: ComponentFixture<Catalogos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Catalogos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catalogos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
