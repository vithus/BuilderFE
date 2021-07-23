import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesseeOutstandingComponent } from './lessee-outstanding.component';

describe('LesseeOutstandingComponent', () => {
  let component: LesseeOutstandingComponent;
  let fixture: ComponentFixture<LesseeOutstandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesseeOutstandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesseeOutstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
