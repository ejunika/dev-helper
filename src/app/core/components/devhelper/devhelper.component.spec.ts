import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevhelperComponent } from './devhelper.component';

describe('DevhelperComponent', () => {
  let component: DevhelperComponent;
  let fixture: ComponentFixture<DevhelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevhelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevhelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
