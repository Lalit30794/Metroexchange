import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trades',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './margin-management.component.html',
  styleUrl: './margin-management.component.less',
})
export class MarginManagementComponent {
  markets = ['NSE', 'MCX', 'BSE', 'NCDEX'];
  // Sample array of valans with value and label
  valans = [
    { value: '789', label: '30SEP-04OCT' },
    { value: '783', label: '23SEP-27SEP' },
    { value: '777', label: '16SEP-20SEP' },
    { value: '771', label: '09SEP-13SEP' },
    { value: '765', label: '02SEP-06SEP' },
    { value: '759', label: '26AUG-30AUG' },
    { value: '753', label: '19AUG-23AUG' },
    { value: '747', label: '12AUG-16AUG' },
    { value: '741', label: '05AUG-09AUG' },
    { value: '735', label: '29JUL-02AUG' },
    { value: '729', label: '22JUL-26JUL' },
    // ...add more valans as needed
  ];

  // Model to hold the selected value
  selectedValan: string | null = null;
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

  dataList: any[] = []; // Your data array
  filteredData: any[] = [];

  constructor() {
    // Initialize your data
    this.dataList = this.getData(); // Replace with your data fetching logic
    this.filteredData = this.dataList; // Initially show all data
  }

  getData() {
    // Dummy data for demonstration, replace with your actual data source
    return [
      {
        name: 'Item 1',
        all: 1,
        outst: 2,
        valan: 'Data',
        gross: 0.0,
        cltBrok: 0.0,
        bill: 0.0,
        brok: 0.0,
        sb1: 0.0,
        sb2: 0.0,
        totalMTM: 0.0,
        selfBrok: 0.0,
        otherData: 'Other',
      },
      // Add more items as needed
    ];
  }

  updateEntries(traget: any) {
    // Logic to update the number of entries shown based on the selected value
    console.log(`Show ${traget.value} entries`);
  }

  filterData(searchTerm: any) {
    this.filteredData = this.dataList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }

  downloadCSV() {
    // Logic to download CSV
    console.log('Download CSV');
  }

  downloadPDF() {
    // Logic to download PDF
    console.log('Download PDF');
  }

  downloadSVG() {
    // Logic to download SVG
    console.log('Download SVG');
    const csvData = this.filteredData.map((item) => ({
      No: this.filteredData.indexOf(item) + 1,
      Name: item.name,
      All: item.all,
      Outst: item.outst,
      Valan: item.valan,
      Gross: item.gross,
      CltBrok: item.cltBrok,
      Bill: item.bill,
      Brok: item.brok,
      SB1: item.sb1,
      SB2: item.sb2,
      TotalMTM: item.totalMTM,
      SelfBrok: item.selfBrok,
      OtherData: item.otherData,
    }));

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      Object.keys(csvData[0]).join(',') +
      '\n' +
      csvData.map((e) => Object.values(e).join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
  }
}
