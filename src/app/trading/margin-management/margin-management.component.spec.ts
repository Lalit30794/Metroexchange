import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginManagementComponent } from './margin-management.component';

describe('MarginManagementComponent', () => {
  let component: MarginManagementComponent;
  let fixture: ComponentFixture<MarginManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarginManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarginManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
