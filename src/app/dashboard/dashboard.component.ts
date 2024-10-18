import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Data, Router, RouterOutlet } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
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
  public deviceInfo: Data;
  public isMobile: boolean = false;
  panels = ['Latest Orders', 'Pending Orders', 'Rejection Logs'];
  constructor(
    private router: Router,
    private deviceService: DeviceDetectorService
  ) {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.panels, event.previousIndex, event.currentIndex);
  }

  minimize() {
    this.isMinimize = !this.isMinimize;
  }
  fullscreen() {
    this.isFullScreen = !this.isFullScreen;
  }


  change(routes: string) {
    const navigationPage = routes.toLowerCase();
    this.router.navigate([navigationPage]);

  }
}
