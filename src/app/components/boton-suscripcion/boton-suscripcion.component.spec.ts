import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSuscripcionComponent } from './boton-suscripcion.component';

describe('CrearCanalComponent', () => {
    let component: BotonSuscripcionComponent;
    let fixture: ComponentFixture<BotonSuscripcionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BotonSuscripcionComponent],
        });
        fixture = TestBed.createComponent(BotonSuscripcionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
