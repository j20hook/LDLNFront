import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncioLogComponent } from './incio-log.component';

describe('IncioLogComponent', () => {
  let component: IncioLogComponent;
  let fixture: ComponentFixture<IncioLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncioLogComponent]
    });
    fixture = TestBed.createComponent(IncioLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
