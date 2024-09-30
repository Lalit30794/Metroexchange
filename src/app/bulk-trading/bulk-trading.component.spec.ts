import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkTradingComponent } from './bulk-trading.component';

describe('BulkTradingComponent', () => {
  let component: BulkTradingComponent;
  let fixture: ComponentFixture<BulkTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkTradingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
