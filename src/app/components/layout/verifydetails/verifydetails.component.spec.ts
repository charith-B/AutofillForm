import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifydetailsComponent } from './verifydetails.component';

describe('VerifydetailsComponent', () => {
  let component: VerifydetailsComponent;
  let fixture: ComponentFixture<VerifydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
