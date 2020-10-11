import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoDependentesComponent } from './resumo-dependentes.component';

describe('ResumoDependentesComponent', () => {
  let component: ResumoDependentesComponent;
  let fixture: ComponentFixture<ResumoDependentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoDependentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoDependentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
