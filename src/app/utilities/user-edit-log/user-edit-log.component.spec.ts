import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditLogComponent } from './user-edit-log.component';

describe('UserEditLogComponent', () => {
  let component: UserEditLogComponent;
  let fixture: ComponentFixture<UserEditLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEditLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
