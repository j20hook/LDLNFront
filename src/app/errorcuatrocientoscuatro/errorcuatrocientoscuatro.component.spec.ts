import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorcuatrocientoscuatroComponent } from './errorcuatrocientoscuatro.component';

describe('ErrorcuatrocientoscuatroComponent', () => {
  let component: ErrorcuatrocientoscuatroComponent;
  let fixture: ComponentFixture<ErrorcuatrocientoscuatroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorcuatrocientoscuatroComponent]
    });
    fixture = TestBed.createComponent(ErrorcuatrocientoscuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
