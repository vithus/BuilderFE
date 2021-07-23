import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentoutComponent } from './add-rentout.component';

describe('AddRentoutComponent', () => {
  let component: AddRentoutComponent;
  let fixture: ComponentFixture<AddRentoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRentoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRentoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
