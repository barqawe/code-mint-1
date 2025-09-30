import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateInput } from "./shared/date-input/date-input";
import { SideMenu } from "./layout/side-menu/side-menu";
import { Base } from "./layout/base/base";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DateInput, SideMenu, Base],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TrainingProject_1');
 
 
}
