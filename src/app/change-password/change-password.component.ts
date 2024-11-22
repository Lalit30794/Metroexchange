import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-passwod',
  standalone: true,
  imports: [NgClass, NgIf, CommonModule, ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.less'
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  rulesPopup = false; // This controls the display of the modal
  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  changePwd() {
    if (this.changePasswordForm.valid) {
      console.log('Password changed successfully');
    } else {
      console.log('Form is invalid');
    }
  }

  toggleRulesPopup() {
    this.rulesPopup = !this.rulesPopup;
  }
}
