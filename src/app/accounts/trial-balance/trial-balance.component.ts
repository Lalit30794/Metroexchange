import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-trial-balance',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './trial-balance.component.html',
  styleUrl: './trial-balance.component.less',
})
export class TrialBalanceComponent {
  constructor(public dialogRef: MatDialogRef<SidebarComponent>) {}
  closeModel() {
    this.dialogRef.close();
  }
}
