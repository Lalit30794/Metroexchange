import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameIpReportComponent } from './same-ip-report.component';

describe('SameIpReportComponent', () => {
  let component: SameIpReportComponent;
  let fixture: ComponentFixture<SameIpReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SameIpReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SameIpReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
