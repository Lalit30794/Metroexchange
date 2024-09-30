import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBillComponent } from './total-bill.component';

describe('TotalBillComponent', () => {
  let component: TotalBillComponent;
  let fixture: ComponentFixture<TotalBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalBillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
