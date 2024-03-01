import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialBusquedaComponent } from './historial-busqueda.component';

describe('HistorialBusquedaComponent', () => {
  let component: HistorialBusquedaComponent;
  let fixture: ComponentFixture<HistorialBusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialBusquedaComponent]
    });
    fixture = TestBed.createComponent(HistorialBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
