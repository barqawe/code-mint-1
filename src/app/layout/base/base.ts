import { Component, inject } from '@angular/core';
import { SideMenu } from "../side-menu/side-menu";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';
import { Layout } from '../../layout';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-base',
  imports: [SideMenu, Header, Footer, RouterOutlet, NgClass],
  templateUrl: './base.html',
  styleUrl: './base.scss'
})
export class Base {
 public readonly  layout = inject(Layout);

 constructor() {
  console.log(this.layout.isSideMenuOpen);
 }
}
