import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private isSideNavOpenSource = new BehaviorSubject<boolean>(false); // false means closed initially
  isSideNavOpen$ = this.isSideNavOpenSource.asObservable();

  // Toggle SideNav
  toggleSideNav() {
    this.isSideNavOpenSource.next(!this.isSideNavOpenSource.value);
  }

  // Manually close SideNav
  closeSideNav() {
    this.isSideNavOpenSource.next(false);
  }

  // Manually open SideNav
  openSideNav() {
    this.isSideNavOpenSource.next(true);
  }

}
