import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRemoveAllComponent } from './button-remove-all.component';

describe('ButtonRemoveAllComponent', () => {
  let component: ButtonRemoveAllComponent;
  let fixture: ComponentFixture<ButtonRemoveAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRemoveAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRemoveAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
