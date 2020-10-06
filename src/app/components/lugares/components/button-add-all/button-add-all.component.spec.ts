import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddAllComponent } from './button-add-all.component';

describe('ButtonAddAllComponent', () => {
  let component: ButtonAddAllComponent;
  let fixture: ComponentFixture<ButtonAddAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
