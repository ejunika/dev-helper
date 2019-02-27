import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiReportComponent } from './pbi-report.component';

describe('PbiReportComponent', () => {
  let component: PbiReportComponent;
  let fixture: ComponentFixture<PbiReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbiReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbiReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
