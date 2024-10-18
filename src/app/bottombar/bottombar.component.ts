import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-bottombar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './bottombar.component.html',
  styleUrl: './bottombar.component.less',
})
export class BottombarComponent {
  public deviceInfo: Data;
  public isMobile: boolean = false;
  constructor(
    private router: Router,
    private deviceService: DeviceDetectorService
  ) {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
  }


  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
