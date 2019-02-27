import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiReportsComponent } from './pbi-reports.component';

describe('PbiReportsComponent', () => {
  let component: PbiReportsComponent;
  let fixture: ComponentFixture<PbiReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbiReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbiReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
