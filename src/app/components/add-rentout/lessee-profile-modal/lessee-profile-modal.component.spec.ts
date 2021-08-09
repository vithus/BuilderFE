import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesseeProfileModalComponent } from './lessee-profile-modal.component';

describe('LesseeProfileModalComponent', () => {
  let component: LesseeProfileModalComponent;
  let fixture: ComponentFixture<LesseeProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesseeProfileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesseeProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
