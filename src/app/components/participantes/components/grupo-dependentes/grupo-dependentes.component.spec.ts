import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoDependentesComponent } from './grupo-dependentes.component';

describe('GrupoDependentesComponent', () => {
  let component: GrupoDependentesComponent;
  let fixture: ComponentFixture<GrupoDependentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoDependentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoDependentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
