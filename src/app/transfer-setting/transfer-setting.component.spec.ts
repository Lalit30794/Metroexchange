import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSettingComponent } from './transfer-setting.component';

describe('TransferSettingComponent', () => {
  let component: TransferSettingComponent;
  let fixture: ComponentFixture<TransferSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
