import { CommonModule, DOCUMENT, NgStyle } from '@angular/common';
import { Component, EventEmitter, inject, Inject, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { DataTablesComponent } from '../data-tables/data-tables.component';
import { ModelComponent } from '../model/model.component';
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
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.less',
})
export class TopbarComponent {
  // Define an output event to send toggle changes
  @Output() toggleSideNav: EventEmitter<any> = new EventEmitter<any>();
  @Output() topNavbar: EventEmitter<any> = new EventEmitter<any>();
  isSideNavOpen: boolean = false;
  isProfileDropdownOpen: boolean = false;
  keyDropdownOpen: boolean = false;
  user: any;

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
      modal: '#loginMappAccountModal',
    },
    {
      text: 'Alert Settings',
      icon: 'bi bi-bell',
      modal: '#alertSettingsModal',
    },
    { text: 'Rules & Regulation', icon: 'bi bi-megaphone', action: 'Rules' },
    { text: 'Custom Layout ', icon: 'bi bi-grid-1x2-fill', action: 'model' },
    { text: 'Signout', icon: 'bi bi-box-arrow-in-right', action: 'logout' },
  ];
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {
    let localStorage = this.document?.defaultView?.localStorage;
    let userName = localStorage?.getItem('username');
    this.user = {
      name: userName,
      id: '692336',
      role: 'Super Master',
    };
  }
  isSidebarOpen = true;
  isTopbarOpen: boolean = false;
  readonly dialog = inject(MatDialog);

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
    console.log(`Change action triggered: ${action}`);
    // Handle action logic
    switch (action) {
      case 'logout':
        console.log('Logging out...');
        this.logout(); // This will execute, but without a break it will continue to 'model' case
        break;
      case 'model':
        console.log('Opening model...');
        this.changeUI('300ms', '150ms');
        break;
      default:
        console.log('Unknown action');
    }
  }

  changeUI(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(ModelComponent, {
      width: '250px',
      height: '200px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    // After dialog is closed
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'sidebar') {
        this.toggleSideNav.emit(true);
        this.toggleSideNav.emit(false);
        console.log('Dialog closed with result:', result); // Handle the data returned from the dialog
      }
      if (result === 'topbar') {
        this.toggleSideNav.emit(false);
        this.toggleSideNav.emit(true);
        console.log('Dialog closed with result:', result); // Handle the data returned from the dialog
      }
    });
  }
}
