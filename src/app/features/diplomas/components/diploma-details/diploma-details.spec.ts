import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaDetails } from './diploma-details';

describe('DiplomaDetails', () => {
  let component: DiplomaDetails;
  let fixture: ComponentFixture<DiplomaDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiplomaDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomaDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
