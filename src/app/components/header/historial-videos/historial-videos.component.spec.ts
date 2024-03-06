import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialVideosComponent } from './historial-videos.component';

describe('HistorialVideosComponent', () => {
  let component: HistorialVideosComponent;
  let fixture: ComponentFixture<HistorialVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialVideosComponent]
    });
    fixture = TestBed.createComponent(HistorialVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
