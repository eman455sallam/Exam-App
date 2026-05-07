import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomasLayout } from './diplomas-layout';

describe('DiplomasLayout', () => {
  let component: DiplomasLayout;
  let fixture: ComponentFixture<DiplomasLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiplomasLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomasLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
