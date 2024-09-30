import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerageReportComponent } from './brokerage-report.component';

describe('BrokerageReportComponent', () => {
  let component: BrokerageReportComponent;
  let fixture: ComponentFixture<BrokerageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerageReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
