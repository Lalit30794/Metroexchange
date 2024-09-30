import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quantity-setting',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './quantity-setting.component.html',
  styleUrl: './quantity-setting.component.less',
})
export class QuantitySettingComponent {
  masters: string[] = ['Master 1', 'Master 2', 'Master 3', 'Master 4'];
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

  filteredMasters: string[] = [];
  constructor() {}
  onSearchChange(): void {
    if (this.searchTerm.length > 0) {
      this.filteredMasters = this.masters.filter((master) =>
        master.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredMasters = [];
    }
  }

  selectMaster(master: string): void {
    this.searchTerm = master;
    this.filteredMasters = [];
  }
}
