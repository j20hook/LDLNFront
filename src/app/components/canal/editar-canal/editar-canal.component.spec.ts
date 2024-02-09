import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCanalComponent } from './editar-canal.component';

describe('CanalComponent', () => {
    let component: EditarCanalComponent;
    let fixture: ComponentFixture<EditarCanalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EditarCanalComponent],
        });
        fixture = TestBed.createComponent(EditarCanalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
