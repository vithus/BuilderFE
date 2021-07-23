import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLesseeComponent } from './add-lessee.component';

describe('AddLesseeComponent', () => {
  let component: AddLesseeComponent;
  let fixture: ComponentFixture<AddLesseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLesseeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLesseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
