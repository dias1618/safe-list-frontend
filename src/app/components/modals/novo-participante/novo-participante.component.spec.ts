import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoParticipanteComponent } from './novo-participante.component';

describe('NovoParticipanteComponent', () => {
  let component: NovoParticipanteComponent;
  let fixture: ComponentFixture<NovoParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoParticipanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
