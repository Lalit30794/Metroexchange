import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashLedgerLogComponent } from './cash-ledger-log.component';

describe('CashLedgerLogComponent', () => {
  let component: CashLedgerLogComponent;
  let fixture: ComponentFixture<CashLedgerLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashLedgerLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashLedgerLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
