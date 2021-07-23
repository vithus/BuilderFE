import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentcertificateComponent } from './paymentcertificate.component';

describe('PaymentcertificateComponent', () => {
  let component: PaymentcertificateComponent;
  let fixture: ComponentFixture<PaymentcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentcertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
