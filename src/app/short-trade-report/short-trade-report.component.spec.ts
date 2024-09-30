import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTradeReportComponent } from './short-trade-report.component';

describe('ShortTradeReportComponent', () => {
  let component: ShortTradeReportComponent;
  let fixture: ComponentFixture<ShortTradeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortTradeReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortTradeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
