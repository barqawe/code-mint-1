import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss'
})
export class SideMenu {
  isOpen:boolean = true;
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
