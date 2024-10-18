import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf, FormsModule, NgClass],
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.less',
})
export class NewAccountComponent {
  selectedOption: string = '';
  accountFormGroup!: FormGroup;

  checkboxItems = [
    { id: 'onlyPosition', label: 'Only Position', checked: false },
    {
      id: 'intraDayAutoSquare',
      label: 'Intra Day Auto Square',
      checked: false,
    },
    { id: 'weeklyAutoSquare', label: 'Weekly Auto Square', checked: false },
    {
      id: 'applyAutoSquareNSE',
      label: 'Apply Auto Square (NSE/MCX/NOPT)',
      checked: false,
    },
    {
      id: 'positionRollOverDisabled',
      label: 'Position Roll Over Disabled',
      checked: false,
    },
    { id: 'bandScriptAllow', label: 'Band Script Allow', checked: false },
    {
      id: 'm2mLinkedWithLedger',
      label: 'M2M Linked with Ledger',
      checked: false,
    },
    {
      id: 'applyAutoSquareFOREX',
      label: 'Apply Auto Square (FOREX/COMEX)',
      checked: false,
    },
    { id: 'limitSLDisabled', label: 'Limit/SL Disabled', checked: false },
  ];

  constructor(private fb: FormBuilder) {
    this.accountFormGroup = this.fb.group({
      accountType: ['', Validators.required],
      toggle: [false, Validators.required],
      NSE: [false],
      MCX: [false],
    });
  }

  // Optional: This method can be used to log the selected value when it changes
  onOptionChange(event: any) {

    this.selectedOption = event?.target?.value;
  }

  onToggle(i: any) {
    console.info(i);
  }
}
