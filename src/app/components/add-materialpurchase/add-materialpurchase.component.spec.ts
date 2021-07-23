import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialpurchaseComponent } from './add-materialpurchase.component';

describe('AddMaterialpurchaseComponent', () => {
  let component: AddMaterialpurchaseComponent;
  let fixture: ComponentFixture<AddMaterialpurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaterialpurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaterialpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
