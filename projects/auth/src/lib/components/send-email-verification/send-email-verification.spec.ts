import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailVerification } from './send-email-verification';

describe('SendEmailVerification', () => {
  let component: SendEmailVerification;
  let fixture: ComponentFixture<SendEmailVerification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendEmailVerification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendEmailVerification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
