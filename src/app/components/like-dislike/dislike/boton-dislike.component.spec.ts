import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDislikeComponent } from './boton-dislike.component';

describe('CrearCanalComponent', () => {
    let component: BotonDislikeComponent;
    let fixture: ComponentFixture<BotonDislikeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BotonDislikeComponent],
        });
        fixture = TestBed.createComponent(BotonDislikeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
