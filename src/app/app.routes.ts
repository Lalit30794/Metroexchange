import { Routes } from '@angular/router';
import { CashEntryComponent } from './accounts/cash-entry/cash-entry.component';
import { DepositEntryComponent } from './accounts/deposit-entry/deposit-entry.component';
import { JvBrokerListComponent } from './accounts/jv-broker-list/jv-broker-list.component';
import { JvBrokerComponent } from './accounts/jv-broker/jv-broker.component';
import { JvComponent } from './accounts/jv/jv.component';
import { LedgerComponent } from './accounts/ledger/ledger.component';
import { TotalBillComponent } from './accounts/total-bill/total-bill.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BulkTradingComponent } from './bulk-trading/bulk-trading.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuantitySettingComponent } from './quantity-setting/quantity-setting.component';
import { BrokerageReportComponent } from './reports/brokerage-report/brokerage-report.component';
import { RulesComponent } from './rules/rules.component';
import { SameIpReportComponent } from './same-ip-report/same-ip-report.component';
import { ScriptBlockAllowComponent } from './script-block-allow/script-block-allow.component';
import { ShortTradeReportComponent } from './short-trade-report/short-trade-report.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';
import { BlockedScriptsComponent } from './trading/blocked-scripts/blocked-scripts.component';
import { MarginManagementComponent } from './trading/margin-management/margin-management.component';
import { PositionComponent } from './trading/position/position.component';
import { TradesComponent } from './trading/trades/trades.component';
import { TransferSettingComponent } from './transfer-setting/transfer-setting.component';
import { BrokerComponent } from './users/broker/broker.component';
import { CustomerComponent } from './users/customer/customer.component';
import { MasterComponent } from './users/master/master.component';
import { NewAccountComponent } from './users/new-account/new-account.component';
import { AutoSquareOffListComponent } from './utilities/auto-square-off-list/auto-square-off-list.component';
import { CashLedgerLogComponent } from './utilities/cash-ledger-log/cash-ledger-log.component';
import { DepositLedgerLogComponent } from './utilities/deposit-ledger-log/deposit-ledger-log.component';
import { RejectionLogsComponent } from './utilities/rejection-logs/rejection-logs.component';
import { TradeLogsComponent } from './utilities/trade-logs/trade-logs.component';
import { UserEditLogComponent } from './utilities/user-edit-log/user-edit-log.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: 'login', component: SigninComponent },

  {
    path: '',
    component: LayoutComponent, // LayoutComponent as wrapper
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'watchlist', component: WatchlistComponent },
      { path: 'summary-report', component: SummaryReportComponent },
      // Trading routes
      { path: 'trading', component: TradesComponent },
      { path: 'trades', component: TradesComponent },
      { path: 'position', component: PositionComponent },
      { path: 'margin-management', component: MarginManagementComponent },
      { path: 'blocked-scripts', component: BlockedScriptsComponent },

      // User Routes
      { path: 'users', component: CustomerComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'master', component: MasterComponent },
      { path: 'broker', component: BrokerComponent },
      { path: 'new-account', component: NewAccountComponent },
      //  Utilities routes
      { path: 'utilities', component: TradeLogsComponent },
      { path: 'trade-logs', component: TradeLogsComponent },
      { path: 'user-edit-log', component: UserEditLogComponent },
      { path: 'deposit-ledger-log', component: DepositLedgerLogComponent },
      { path: 'cash-ledger-log', component: CashLedgerLogComponent },
      { path: 'rejection-logs', component: RejectionLogsComponent },
      {
        path: 'auto-square-off-list',
        component: AutoSquareOffListComponent,
      },

      // Account routs
      { path: 'accounts', component: LedgerComponent },
      { path: 'ledger', component: LedgerComponent },
      { path: 'cash-entry', component: CashEntryComponent },
      { path: 'deposit-entry', component: DepositEntryComponent },
      { path: 'jv', component: JvComponent },
      { path: 'jv-broker', component: JvBrokerComponent },
      { path: 'jv-broker-list', component: JvBrokerListComponent },
      { path: 'total-bill', component: TotalBillComponent },
      //  Report Routes
      { path: 'reports', component: BrokerageReportComponent },
      { path: 'brokerage-report', component: BrokerageReportComponent },
      { path: 'same-ip-report', component: SameIpReportComponent },
      { path: 'short-trade-report', component: ShortTradeReportComponent },
      { path: 'bulk-trading', component: BulkTradingComponent },

      // Adding the Settings routes

      { path: 'settings', component: QuantitySettingComponent },
      { path: 'quantity-setting', component: QuantitySettingComponent },
      { path: 'transfer-setting', component: TransferSettingComponent },
      { path: 'script-block-allow', component: ScriptBlockAllowComponent },

      {
        path: 'reports',
        component: BrokerageReportComponent,
      },
      {
        path: 'rules',
        component: RulesComponent,
      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent,
      },
    ],
  },

  { path: '**', component: PageNotFoundComponent }, // Fallback route for invalid paths
];
