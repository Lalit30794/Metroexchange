import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TrialBalanceComponent } from '../accounts/trial-balance/trial-balance.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, TrialBalanceComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.less',
})
export class SidebarComponent {
  // Use @Input to receive the toggle value from the parent
  @Input() isSideNavOpen: boolean = false;
  menus = [
    { tag: 'DB', name: 'Dashboard', path: 'dashboard', submenus: null },
    { tag: 'WL', name: 'Watchlist', path: 'watchlist', submenus: null },
    {
      tag: 'SR',
      name: 'Summary Report',
      path: 'summary-report',
      submenus: null,
    },
    {
      tag: 'TR',
      name: 'Trading',
      path: 'trading',
      submenus: [
        { name: 'Trades', path: 'trades' },
        { name: 'Position', path: 'position' },
        { name: 'Margin Management', path: 'margin-management' },
        { name: 'Blocked Scripts', path: 'blocked-scripts' },
      ],
      open: false,
    },
    {
      tag: 'US',
      name: 'Users',
      path: 'users',
      submenus: [
        { name: 'Customer', path: 'customer' },
        { name: 'Master', path: 'master' },
        { name: 'Broker', path: 'broker' },
        { name: 'New Account', path: 'new-account' },
      ],
      open: false,
    },
    {
      tag: 'UT',
      name: 'Utilities',
      path: 'utilities',
      submenus: [
        { name: 'Trade Logs', path: 'trade-logs' },
        { name: 'User Edit Log', path: 'user-edit-log' },
        { name: 'Deposit Ledger Log', path: 'deposit-ledger-log' },
        { name: 'Cash Ledger Log', path: 'cash-ledger-log' },
        { name: 'Rejection Logs', path: 'rejection-logs' },
        { name: 'Auto Square Off List', path: 'auto-square-off-list' },
      ],
      open: false,
    },
    {
      tag: 'AC',
      name: 'Accounts',
      path: 'accounts',
      submenus: [
        { name: 'Ledger', path: 'ledger' },
        { name: 'Cash Entry', path: 'cash-entry' },
        { name: 'Deposit Entry', path: 'deposit-entry' },
        { name: 'JV', path: 'jv' },
        { name: 'JV Broker', path: 'jv-broker' },
        { name: 'JV Broker List', path: 'jv-broker-list' },
        { name: 'Total Bill', path: 'total-bill' },
        { name: 'Trial Balance', path: 'trial-balance' },
      ],
      open: false,
    },
    {
      tag: 'RP',
      name: 'Reports',
      path: 'reports',
      submenus: [
        { name: 'Brokerage Report', path: 'brokerage-report' },
        { name: 'Same IP Report', path: 'same-ip-report' },
        { name: 'Short Trade Report', path: 'short-trade-report' },
        { name: 'Bulk-Trading', path: 'bulk-trading' },
      ],
      open: false,
    },
    {
      tag: 'ST',
      name: 'Settings',
      path: 'settings',
      submenus: [
        { name: 'Quantity Setting', path: 'quantity-setting' },
        { name: 'Transfer Setting', path: 'transfer-setting' },
        { name: 'Script Block-Allow', path: 'script-block-allow' },
      ],
      open: false,
    },
  ];
  readonly dialog = inject(MatDialog);

  constructor(private router: Router) { }

  change(page: string) {
    // Logic to navigate or handle page changes
    const navigationPage = page.toLowerCase();
    if (navigationPage === 'trial-balance') return this.changeUI('300ms', '150ms');
    this.router.navigate([navigationPage]);
    console.log(`Navigating to ${navigationPage}`);
  }

  toggleDropdown(menu: any) {
    menu.open = !menu.open; // Toggles the open state for the dropdown
  }

  changeClass() {
    // Logic to change classes, if needed
  }
  changeUI(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(TrialBalanceComponent, {
      width: '400px',
      height: '279px',
      panelClass: 'trial-balance-popup',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
