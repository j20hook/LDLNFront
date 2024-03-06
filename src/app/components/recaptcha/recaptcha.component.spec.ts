import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaptchaComponent } from './recaptcha.component';

describe('RecaptchaComponent', () => {
  let component: RecaptchaComponent;
  let fixture: ComponentFixture<RecaptchaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecaptchaComponent]
    });
    fixture = TestBed.createComponent(RecaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
