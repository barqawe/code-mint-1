import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateInputConfig } from './interfaces/date-input.interface';

@Component({
  selector: 'app-date-input',
  imports: [ReactiveFormsModule],
  templateUrl: './date-input.html',
  styleUrl: './date-input.scss'
})
export class DateInput {
  @Input() config!: DateInputConfig;
}
