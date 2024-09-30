import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashEntryComponent } from './cash-entry.component';

describe('CashEntryComponent', () => {
  let component: CashEntryComponent;
  let fixture: ComponentFixture<CashEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
