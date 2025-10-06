import { Component, Output,EventEmitter, inject, signal, effect } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Layout } from '../../layout';

@Component({
  selector: 'app-side-menu',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss'
})
export class SideMenu {
  constructor(public layout:Layout) {
   
  }
  toggleMenu() {
    this.layout.toggleSideMenu();
  }
  }


