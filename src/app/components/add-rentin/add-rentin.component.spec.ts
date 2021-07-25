import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentinComponent } from './add-rentin.component';

describe('AddRentinComponent', () => {
  let component: AddRentinComponent;
  let fixture: ComponentFixture<AddRentinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRentinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRentinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
