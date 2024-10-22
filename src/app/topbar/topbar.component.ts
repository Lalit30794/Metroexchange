import { CommonModule, DOCUMENT, NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { DataTablesComponent } from '../data-tables/data-tables.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    SidebarComponent,
    DataTablesComponent,
    CommonModule,
    NgStyle,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    ReactiveFormsModule,
    NgClass

  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.less',
})
export class TopbarComponent implements OnInit {
  loginForm!: FormGroup;
  alertSettingsForm!: FormGroup;
  // Define an output event to send toggle changes
  @Output() toggleSideNav: EventEmitter<any> = new EventEmitter<any>();
  @Output() topNavbar: EventEmitter<any> = new EventEmitter<any>();
  isSideNavOpen: boolean = false;
  isProfileDropdownOpen: boolean = false;
  keyDropdownOpen: boolean = false;
  user: any


  indices = [
    { name: 'SENSEX', value: 845.31, change: 1359.51 },
    { name: 'NIFTY50', value: 25790.95, change: 375.15 },
    { name: 'BANKNIFTY', value: 53793.2, change: 755.6 },
    { name: 'MIDCAP', value: 60208.8, change: 856.9 },
  ];
  dropdownOptions = [
    { key: 'Ctrl+Shift+H', value: 'Dashboard' },
    { key: 'Ctrl+Shift+L', value: 'MarketWatch' },
    { key: 'Ctrl+Shift+K', value: 'Summary Rpt' },
    { key: 'Ctrl+Shift+Z', value: 'Ledger Report' },
    { key: 'Ctrl+Shift+E', value: 'New Account' },
    { key: 'Ctrl+Y', value: 'Trades' },
    { key: 'Ctrl+Q', value: 'Qty Setting' },
    { key: 'Ctrl+Shift+U', value: 'Cash Entry' },
    { key: 'Ctrl+Shift+X', value: 'Position Report' },
  ];

  menuItems = [
    {
      text: 'Change Password',
      icon: 'bi bi-lock-fill',
      action: 'changePassword',
    },
    {
      text: 'Link Account',
      icon: 'bi bi-link-45deg',
      modal: 'loginMappAccountModal',
      action: 'modal',
    },
    {
      text: 'Alert Settings',
      icon: 'bi bi-bell',
      modal: 'alertSettingsModal',
      action: 'modal',
    },
    { text: 'Rules & Regulation', icon: 'bi bi-megaphone', action: 'rules' },
    { text: 'Signout', icon: 'bi bi-box-arrow-in-right', action: 'logout' },
  ];
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private fb: FormBuilder
  ) {
    let localStorage = this.document?.defaultView?.localStorage;
    let userName = localStorage?.getItem('username');
    this.user = {
      name: userName,
      id: '692336',
      role: 'Super Master',
    };
  }



  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    // Initialize the reactive form with controls for each checkbox
    this.alertSettingsForm = this.fb.group({
      tradeSound: [false],
      autoSquareOff: [false],
      autoSquareOffSound: [false],
      tradeClear: [false]
    });
  }

  onLoginMapAccountSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Data:', this.loginForm.value);
      // Perform the form submission or call a service to handle the data
    } else {
      console.log('Form is invalid');
    }
  }

  // Submit function
  onAlertSettingsSubmit(): void {
    if (this.alertSettingsForm.valid) {
      console.log('Form Data:', this.alertSettingsForm.value);
      // Handle submission or API call here
    }
  }

  alertSetting(controlName: string): void {
    console.log(`${controlName} toggled:`, this.alertSettingsForm.get(controlName)?.value);
  }



  toggleMenu() {
    this.isSideNavOpen = !this.isSideNavOpen;
    // Emit the updated state to the parent
    this.toggleSideNav.emit(this.isSideNavOpen);
  }

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }
  toggleKeyDropdown() {
    this.keyDropdownOpen = !this.keyDropdownOpen;
  }

  logout() {
    this.router.navigate(['/login']);
    // Handle logout logic
  }

  // Example action methods
  change(action: any) {
    this.toggleProfileDropdown();
    // Handle action logic
    switch (action) {
      case 'logout':
        this.logout(); // This will execute, but without a break it will continue to 'model' case
        break;
      case 'rules':
        this.router.navigate([action]);
        break;
      case 'changePassword':
        this.router.navigate([action]);
        break;
      case 'modal':
        console.log('Action', action);
        break;
      default:
        console.log('Unknown action');
    }
  }
}
