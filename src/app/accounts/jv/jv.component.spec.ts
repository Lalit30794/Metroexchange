import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JvComponent } from './jv.component';

describe('JvComponent', () => {
  let component: JvComponent;
  let fixture: ComponentFixture<JvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
