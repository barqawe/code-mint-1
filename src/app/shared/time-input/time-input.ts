import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeInputConfig } from './interfaces/time-input.interface';

@Component({
  selector: 'app-time-input',
  imports: [ReactiveFormsModule],
  templateUrl: './time-input.html',
  styleUrl: './time-input.scss'
})
export class TimeInput {
  @Input() config!: TimeInputConfig;
}
