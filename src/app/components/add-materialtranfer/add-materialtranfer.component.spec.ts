import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialtranferComponent } from './add-materialtranfer.component';

describe('AddMaterialtranferComponent', () => {
  let component: AddMaterialtranferComponent;
  let fixture: ComponentFixture<AddMaterialtranferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaterialtranferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaterialtranferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
