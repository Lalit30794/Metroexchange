import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptBlockAllowComponent } from './script-block-allow.component';

describe('ScriptBlockAllowComponent', () => {
  let component: ScriptBlockAllowComponent;
  let fixture: ComponentFixture<ScriptBlockAllowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptBlockAllowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScriptBlockAllowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
