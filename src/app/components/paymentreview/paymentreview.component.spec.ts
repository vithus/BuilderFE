import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentreviewComponent } from './paymentreview.component';

describe('PaymentreviewComponent', () => {
  let component: PaymentreviewComponent;
  let fixture: ComponentFixture<PaymentreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
