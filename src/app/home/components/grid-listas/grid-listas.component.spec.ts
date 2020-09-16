import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListasComponent } from './grid-listas.component';

describe('GridListasComponent', () => {
  let component: GridListasComponent;
  let fixture: ComponentFixture<GridListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
