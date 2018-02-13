import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneContainerComponent } from './lane-container.component';

describe('LaneContainerComponent', () => {
  let component: LaneContainerComponent;
  let fixture: ComponentFixture<LaneContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaneContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaneContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
