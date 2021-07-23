import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialreturnComponent } from './add-materialreturn.component';

describe('AddMaterialreturnComponent', () => {
  let component: AddMaterialreturnComponent;
  let fixture: ComponentFixture<AddMaterialreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaterialreturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaterialreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
