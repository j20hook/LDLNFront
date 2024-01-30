import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCanalComponent } from './crear-canal.component';

describe('CrearCanalComponent', () => {
  let component: CrearCanalComponent;
  let fixture: ComponentFixture<CrearCanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCanalComponent]
    });
    fixture = TestBed.createComponent(CrearCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
