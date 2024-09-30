import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositLedgerLogComponent } from './deposit-ledger-log.component';

describe('DepositLedgerLogComponent', () => {
  let component: DepositLedgerLogComponent;
  let fixture: ComponentFixture<DepositLedgerLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositLedgerLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositLedgerLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
