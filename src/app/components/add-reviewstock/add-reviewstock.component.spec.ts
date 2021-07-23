import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewstockComponent } from './add-reviewstock.component';

describe('AddReviewstockComponent', () => {
  let component: AddReviewstockComponent;
  let fixture: ComponentFixture<AddReviewstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReviewstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
