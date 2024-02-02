import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCanalComponent } from './videos-canal.component';

describe('VideosCanalComponent', () => {
  let component: VideosCanalComponent;
  let fixture: ComponentFixture<VideosCanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosCanalComponent]
    });
    fixture = TestBed.createComponent(VideosCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
