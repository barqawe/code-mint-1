import { Component } from '@angular/core';
import { SideMenu } from "../side-menu/side-menu";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base',
  imports: [SideMenu, Header, Footer, RouterOutlet],
  templateUrl: './base.html',
  styleUrl: './base.scss'
})
export class Base {

}
