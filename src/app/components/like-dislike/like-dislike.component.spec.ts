import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeDislikeComponent } from './like-dislike.component';

describe('CrearCanalComponent', () => {
    let component: LikeDislikeComponent;
    let fixture: ComponentFixture<LikeDislikeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LikeDislikeComponent],
        });
        fixture = TestBed.createComponent(LikeDislikeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
