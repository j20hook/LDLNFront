import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucriptoresCanalComponent } from './sucriptores-canal.component';

describe('SucriptoresCanalComponent', () => {
  let component: SucriptoresCanalComponent;
  let fixture: ComponentFixture<SucriptoresCanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucriptoresCanalComponent]
    });
    fixture = TestBed.createComponent(SucriptoresCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
