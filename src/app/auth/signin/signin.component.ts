import { CommonModule, DOCUMENT, NgClass, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NgClass, NgIf, CommonModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.less',
})
export class SigninComponent {
  loginForm: FormGroup;
  isWrongPass: boolean | undefined;
  public showPassword: boolean = false
  constructor(
    private fb: FormBuilder,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void { }
  submitForm(): void {
    if (
      this.loginForm.valid &&
      this.loginForm.value.username === 'LALITDEV' &&
      this.loginForm.value.password === '123123'
    ) {
      let localStorage = this.document?.defaultView?.localStorage;
      localStorage?.setItem('username', this.loginForm.value.username);
      this.router.navigate(['dashboard']);
    } else {
      this.isWrongPass = true;
      this.router.navigate(['']);
    }
  }
  eyeIconToggle() {
    this.showPassword = !this.showPassword
  }
}
