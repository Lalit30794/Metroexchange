import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JvBrokerComponent } from './jv-broker.component';

describe('JvBrokerComponent', () => {
  let component: JvBrokerComponent;
  let fixture: ComponentFixture<JvBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JvBrokerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JvBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
