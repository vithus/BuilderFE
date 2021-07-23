import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorksiteComponent } from './add-worksite.component';

describe('AddWorksiteComponent', () => {
  let component: AddWorksiteComponent;
  let fixture: ComponentFixture<AddWorksiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorksiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorksiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
