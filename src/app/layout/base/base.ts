import { Component } from '@angular/core';
import { SideMenu } from "../side-menu/side-menu";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-base',
  imports: [SideMenu, Header, Footer, RouterOutlet, NgClass],
  templateUrl: './base.html',
  styleUrl: './base.scss'
})
export class Base {
  isOpen : boolean = false;
  isSideMenuOpen(event: boolean) {
    this.isOpen = event;
    console.log(this.isOpen);
    
  }

}
