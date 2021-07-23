import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesseeprofileComponent } from './lesseeprofile.component';

describe('LesseeprofileComponent', () => {
  let component: LesseeprofileComponent;
  let fixture: ComponentFixture<LesseeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesseeprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesseeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
