import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectionLogsComponent } from './rejection-logs.component';

describe('RejectionLogsComponent', () => {
  let component: RejectionLogsComponent;
  let fixture: ComponentFixture<RejectionLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectionLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectionLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
