import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamNavigationButton } from './exam-navigation-button';

describe('ExamNavigationButton', () => {
  let component: ExamNavigationButton;
  let fixture: ComponentFixture<ExamNavigationButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamNavigationButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamNavigationButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
