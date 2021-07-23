import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialconsumableComponent } from './add-materialconsumable.component';

describe('AddMaterialconsumableComponent', () => {
  let component: AddMaterialconsumableComponent;
  let fixture: ComponentFixture<AddMaterialconsumableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaterialconsumableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaterialconsumableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
