import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailsModalComponent } from './rental-details-modal.component';

describe('RentalDetailsModalComponent', () => {
  let component: RentalDetailsModalComponent;
  let fixture: ComponentFixture<RentalDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
