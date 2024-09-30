import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JvBrokerListComponent } from './jv-broker-list.component';

describe('JvBrokerListComponent', () => {
  let component: JvBrokerListComponent;
  let fixture: ComponentFixture<JvBrokerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JvBrokerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JvBrokerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
