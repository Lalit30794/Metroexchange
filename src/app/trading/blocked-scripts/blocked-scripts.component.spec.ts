import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedScriptsComponent } from './blocked-scripts.component';

describe('BlockedScriptsComponent', () => {
  let component: BlockedScriptsComponent;
  let fixture: ComponentFixture<BlockedScriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockedScriptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockedScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
