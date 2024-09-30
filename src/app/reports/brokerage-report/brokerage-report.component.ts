import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brokerage-report',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './brokerage-report.component.html',
  styleUrl: './brokerage-report.component.less',
})
export class BrokerageReportComponent {
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
}
