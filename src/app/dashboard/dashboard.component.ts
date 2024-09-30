import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottombarComponent } from '../bottombar/bottombar.component';
import { DataTablesComponent } from '../data-tables/data-tables.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { WatchlistComponent } from '../watchlist/watchlist.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TopbarComponent,
    SidebarComponent,
    DataTablesComponent,
    RouterOutlet,
    BottombarComponent,
    WatchlistComponent,
    CdkDropList,
    CdkDropListGroup,
    NgFor,
    CdkDrag,
    NgIf,
    NgClass,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less',
})
export class DashboardComponent {
  isMinimize: boolean = false;
  isFullScreen: boolean = false;
  panels = ['Latest Orders', 'Pending Orders', 'Rejection Logs'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.panels, event.previousIndex, event.currentIndex);
  }

  minimize() {
    this.isMinimize = !this.isMinimize;
  }
  fullscreen() {
    this.isFullScreen = !this.isFullScreen;
  }
}
