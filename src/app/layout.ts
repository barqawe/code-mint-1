import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Layout {

  sideMenuOpen = true;
  toggleSideMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }
  public get isSideMenuOpen() {
    return this.sideMenuOpen;
  }
}
