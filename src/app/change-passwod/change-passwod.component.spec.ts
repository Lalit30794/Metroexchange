import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswodComponent } from './change-passwod.component';

describe('ChangePasswodComponent', () => {
  let component: ChangePasswodComponent;
  let fixture: ComponentFixture<ChangePasswodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangePasswodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
