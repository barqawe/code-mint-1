import { Component } from '@angular/core';
import { Base } from "./layout/base/base";

@Component({
  selector: 'app-root',
  imports: [Base],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
