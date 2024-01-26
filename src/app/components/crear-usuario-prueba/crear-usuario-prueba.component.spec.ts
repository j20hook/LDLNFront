import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioPruebaComponent } from './crear-usuario-prueba.component';

describe('CrearUsuarioPruebaComponent', () => {
  let component: CrearUsuarioPruebaComponent;
  let fixture: ComponentFixture<CrearUsuarioPruebaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearUsuarioPruebaComponent]
    });
    fixture = TestBed.createComponent(CrearUsuarioPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
