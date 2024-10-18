import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatListItem } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { LayoutComponent } from '../layout/layout.component';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [MatIcon, MatToolbar, MatButton, MatListItem],
  templateUrl: './model.component.html',
  styleUrl: './model.component.less',
})
export class ModelComponent {
  selectedLayout: boolean = false;
  constructor(public dialogRef: MatDialogRef<LayoutComponent>, private navigationService: NavigationService) { }
  closeDialog(data: string) {
    this.dialogRef.close(data);
  }


  // Method to change layout based on user selection
  selectLayout() {
    this.navigationService.isSideNavOpen$.subscribe((layout) => {
      this.selectedLayout = layout;
    })
  }
}
