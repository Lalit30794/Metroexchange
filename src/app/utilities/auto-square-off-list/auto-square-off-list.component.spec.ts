import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSquareOffListComponent } from './auto-square-off-list.component';

describe('AutoSquareOffListComponent', () => {
  let component: AutoSquareOffListComponent;
  let fixture: ComponentFixture<AutoSquareOffListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoSquareOffListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoSquareOffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
