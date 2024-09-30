import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.less',
})
export class WatchlistComponent {
  masters: string[] = ['Master 1', 'Master 2', 'Master 3', 'Master 4'];
  markets = ['NSE', 'MCX', 'BSE', 'NCDEX'];
  company = [
    { value: 25, name: 'AARTIIND' },
    { value: 149, name: 'ABB' },
    { value: 14, name: 'ABBOTINDIA' },
    { value: 15, name: 'ABCAPITAL' },
    { value: 150, name: 'ABFRL' },
    { value: 16, name: 'ACC' },
    { value: 39, name: 'ADANIENT' },
    { value: 17, name: 'ADANIPORTS' },
    { value: 18, name: 'ALKEM' },
    { value: 20, name: 'AMBUJACEM' },
    { value: 48, name: 'APOLLOHOSP' },
    { value: 21, name: 'APOLLOTYRE' },
    { value: 67, name: 'ASHOKLEY' },
    { value: 151, name: 'ASIANPAINT' },
    { value: 152, name: 'ASTRAL' },
    { value: 22, name: 'ATUL' },
    { value: 59, name: 'AUBANK' },
    { value: 153, name: 'AUROPHARMA' },
    { value: 23, name: 'AXISBANK' },
    { value: 24, name: 'BAJAJ-AUTO' },
    { value: 196, name: 'BAJAJFINSV' },
    { value: 155, name: 'BAJFINANCE' },
    { value: 156, name: 'BALKRISIND' },
    { value: 26, name: 'BALRAMCHIN' },
    { value: 197, name: 'BANDHANBNK' },
    { value: 27, name: 'BANKBARODA' },
    { value: 157, name: 'BATAINDIA' },
    { value: 28, name: 'BEL' },
    { value: 29, name: 'BERGEPAINT' },
    { value: 30, name: 'BHARATFORG' },
    { value: 31, name: 'BHARTIARTL' },
    { value: 32, name: 'BHEL' },
    { value: 33, name: 'BIOCON' },
    { value: 198, name: 'BOSCHLTD' },
    { value: 34, name: 'BPCL' },
    { value: 35, name: 'BRITANNIA' },
    { value: 36, name: 'BSOFT' },
    { value: 37, name: 'CANBK' },
    { value: 38, name: 'CANFINHOME' },
    { value: 199, name: 'CHAMBLFERT' },
  ];

  tableData: any[] = [];
  searchTerm = '';
  filteredMarkets = [...this.markets];
  filteredMarket = [...this.company];
  dropdownVisible: boolean = false; // Control dropdown visibility
  filterOptions() {
    this.filteredMarkets = this.markets.filter((market) =>
      market.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    if (this.filteredMarkets.length > 0) {
      this.dropdownVisible = true; // Show the dropdown if matches found
    }
  }
  filterMarketOptions() {
    this.filteredMarket = this.company.filter((market: Data) =>
      console.info('market', market)
    );
    if (this.filteredMarket.length > 0) {
      this.dropdownVisible = true; // Show the dropdown if matches found
    }
  }
  selectMarket(market: string) {
    this.searchTerm = market;
    this.filteredMarket = [...this.company]; // Set the selected market
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
