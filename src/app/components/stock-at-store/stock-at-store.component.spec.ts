import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAtStoreComponent } from './stock-at-store.component';

describe('StockAtStoreComponent', () => {
  let component: StockAtStoreComponent;
  let fixture: ComponentFixture<StockAtStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockAtStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAtStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
