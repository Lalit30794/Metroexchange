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
  isNseEyeIconShow: boolean = false;
  isMcxEyeIconShow: boolean = false;
  mcxFormSection: boolean = false;
  nseFormSection: boolean = false;
  // Select allow Scripts
  allowScripts: string[] = [
    'ALUMINIUM',
    'COPPER',
    'CRUDEOIL',
    'GOLD',
    'GOLDM',
    'LEAD',
    'NATURALGAS',
    'SILVER',
    'SILVERM',
    'SILVERMIC',
    'ZINC',
  ];
  filteredMarkets: string[] = [];
  filteredBlockMarkets: string[] = [];
  allowDropdownVisible: boolean = false;
  blockDropdownVisible: boolean = false;
  searchTerm: string = '';
  showAllowScripts: boolean = true;
  showBlockScripts: boolean = false;
  // Check box ITEMS
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
  // Array with only the names of the scripts
  blockScripts: string[] = [
    'AARTIIND',
    'ABB',
    'ABBOTINDIA',
    'ABCAPITAL',
    'ABFRL',
    'ACC',
    'ADANIENT',
    'ADANIPORTS',
    'ALKEM',
    'AMARAJABAT',
    'AMBUJACEM',
    'APOLLOHOSP',
    'APOLLOTYRE',
    'ASHOKLEY',
    'ASIANPAINT',
    'ASTRAL',
    'ATUL',
    'AUBANK',
    'AUROPHARMA',
    'AXISBANK',
  ];

  blockTypes: any = {}; // You can define or fetch the blockType from any source

  constructor(private fb: FormBuilder) {
    this.accountFormGroup = this.fb.group({
      accountType: ['', Validators.required],
      toggle: [false, Validators.required],
      NSE: [false],
      MCX: [false],
      allowScript: [[]], // Assuming an array for multiple selection
      selectedOption: ['allow'],
      FreshLimitAllowed: [[]],
      minScriptBelow: [[]],
    });

    this.accountFormGroup
      .get('selectedOption')
      ?.valueChanges.subscribe((value) => {
        if (value === 'allow') {
          this.showAllowScripts = true;
          this.showBlockScripts = false;
        } else if (value === 'block') {
          this.showAllowScripts = false;
          this.showBlockScripts = true;
        }
        // Additional logic can be handled here
      });
  }
  // This will log the value of the radio button selected

  // Show dropdown on input focus
  showDropdown(type: string) {
    if (type === 'allow') {
      this.allowDropdownVisible = true;
      this.filteredMarkets = this.allowScripts;
    } else if (type === 'block') {
      this.blockDropdownVisible = true;
      this.filteredBlockMarkets = this.blockScripts;
    }
  }

  // Hide dropdown on blur (with slight delay to capture selection)
  hideDropdown(type: string) {
    setTimeout(() => {
      if (type === 'allow') {
        this.allowDropdownVisible = false;
      } else if (type === 'block') {
        this.blockDropdownVisible = false;
      }
    }, 200);
  }

  // Filter the dropdown items based on user input
  filterOptions() {
    const term = this.searchTerm.toLowerCase();
    this.filteredMarkets = this.allowScripts.filter((allowScripts) =>
      allowScripts.toLowerCase().includes(term)
    );
  }
  // Filter the dropdown items based on user input
  filterBlockOptions() {
    const term = this.searchTerm.toLowerCase();
    this.filteredBlockMarkets = this.blockScripts.filter((blockScripts) =>
      blockScripts.toLowerCase().includes(term)
    );
  }

  // Select an option from the dropdown
  selectMarket(script: string) {
    this.searchTerm = script;
    this.allowDropdownVisible = false; // Hide dropdown after selection
  }
  // Select an option from the dropdown
  selectBlockScript(script: string) {
    this.searchTerm = script;
    this.blockDropdownVisible = false; // Hide dropdown after selection
  }

  // Optional: This method can be used to log the selected value when it changes
  onOptionChange(event: any) {
    this.selectedOption = event?.target?.value;
  }

  onToggle(i: any) {
    console.info(i);
  }

  marketToggle(type: any) {
    // Handle action logic
    switch (type) {
      case 'NSE':
        this.isNseEyeIconShow = !this.isNseEyeIconShow;
        break;
      case 'MCX':
        this.isMcxEyeIconShow = !this.isMcxEyeIconShow;
        break;
      default:
    }
  }
  eyeIconToggle(market: string) {
    // Handle action logic
    switch (market) {
      case 'NSE':
        this.nseFormSection = !this.nseFormSection;
        break;
      case 'MCX':
        this.mcxFormSection = !this.mcxFormSection;
        break;
      default:
    }
  }

  onSelectionChange(selectedScripts: Event) {
    this.accountFormGroup.get('allowScripts')?.setValue({
      ...this.accountFormGroup.value.allowScripts,
      selectedScripts,
    });
  }
}
