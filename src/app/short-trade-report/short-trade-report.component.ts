import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-short-trade-report',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './short-trade-report.component.html',
  styleUrl: './short-trade-report.component.less',
})
export class ShortTradeReportComponent {
  markets = ['NSE', 'MCX', 'BSE', 'NCDEX'];
  tableData: any[] = [];
  searchTerm = '';
  filteredMarkets = [...this.markets];
  dropdownVisible: boolean = false; // Control dropdown visibility
  filterOptions() {
    this.filteredMarkets = this.markets.filter((market) =>
      market.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    if (this.filteredMarkets.length > 0) {
      this.dropdownVisible = true; // Show the dropdown if matches found
    }
  }

  selectMarket(market: string) {
    this.searchTerm = market; // Set the selected market
    this.filteredMarkets = [...this.markets]; // Reset the dropdown options
    this.dropdownVisible = false; // Hide dropdown on selection
  }

  // Show dropdown when input is focused
  showDropdown() {
    if (this.filteredMarkets.length > 0) {
      this.dropdownVisible = true;
    }
  }
  // Hide dropdown when input loses focus (delay is added to prevent quick hide before selection)
  hideDropdown() {
    setTimeout(() => {
      this.dropdownVisible = false;
    }, 200); // Delay to allow item selection
  }
}
