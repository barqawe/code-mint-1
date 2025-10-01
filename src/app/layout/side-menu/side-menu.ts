import { Component, Output,EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss'
})
export class SideMenu {
  @Output() toggle = new EventEmitter<boolean>();
  isOpen:boolean = false;
  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.toggle.emit(this.isOpen);
  }
  }


