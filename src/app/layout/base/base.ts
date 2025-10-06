import { Component, inject } from '@angular/core';
import { SideMenu } from "../side-menu/side-menu";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';
import { Layout } from '../../layout';


@Component({
  selector: 'app-base',
  imports: [SideMenu, Header, Footer, RouterOutlet],
  templateUrl: './base.html',
  styleUrl: './base.scss'
})
export class Base {
 layout = inject(Layout);
 constructor() {
  console.log(this.layout.isSideMenuOpen);
  
 }

  
 
 

}
