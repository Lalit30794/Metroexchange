import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitySettingComponent } from './quantity-setting.component';

describe('QuantitySettingComponent', () => {
  let component: QuantitySettingComponent;
  let fixture: ComponentFixture<QuantitySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantitySettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantitySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
