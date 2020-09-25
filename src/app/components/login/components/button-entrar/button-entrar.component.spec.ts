import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEntrarComponent } from './button-entrar.component';

describe('ButtonEntrarComponent', () => {
  let component: ButtonEntrarComponent;
  let fixture: ComponentFixture<ButtonEntrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEntrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEntrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
