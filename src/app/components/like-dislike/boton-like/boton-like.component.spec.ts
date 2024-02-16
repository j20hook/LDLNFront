import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLikeComponent } from './boton-like.component';

describe('CrearCanalComponent', () => {
    let component: BotonLikeComponent;
    let fixture: ComponentFixture<BotonLikeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BotonLikeComponent],
        });
        fixture = TestBed.createComponent(BotonLikeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
