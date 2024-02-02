import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalComponent } from './canal.component';

describe('CanalComponent', () => {
  let component: CanalComponent;
  let fixture: ComponentFixture<CanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanalComponent]
    });
    fixture = TestBed.createComponent(CanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
