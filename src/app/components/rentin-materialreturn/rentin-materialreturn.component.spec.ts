import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentinMaterialreturnComponent } from './rentin-materialreturn.component';

describe('RentinMaterialreturnComponent', () => {
  let component: RentinMaterialreturnComponent;
  let fixture: ComponentFixture<RentinMaterialreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentinMaterialreturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentinMaterialreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
