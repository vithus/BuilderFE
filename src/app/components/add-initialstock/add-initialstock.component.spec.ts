import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInitialstockComponent } from './add-initialstock.component';

describe('AddInitialstockComponent', () => {
  let component: AddInitialstockComponent;
  let fixture: ComponentFixture<AddInitialstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInitialstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInitialstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
