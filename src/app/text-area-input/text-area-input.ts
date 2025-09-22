import { Component, Input } from '@angular/core';
import { TextAreaInputConfig } from './interfaces/text-area-input.interface';

@Component({
  selector: 'app-text-area-input',
  imports: [],
  templateUrl: './text-area-input.html',
  styleUrl: './text-area-input.scss'
})
export class TextAreaInput {

@Input() config!: TextAreaInputConfig;
}
