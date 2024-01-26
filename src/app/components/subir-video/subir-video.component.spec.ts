import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirVideoComponent } from './subir-video.component';

describe('SubirVideoComponent', () => {
  let component: SubirVideoComponent;
  let fixture: ComponentFixture<SubirVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirVideoComponent]
    });
    fixture = TestBed.createComponent(SubirVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
