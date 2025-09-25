import { Component, Input } from '@angular/core';
import { TextAreaInputConfig } from './interfaces/text-area-input.interface';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-area-input',
  imports: [ReactiveFormsModule],
  templateUrl: './text-area-input.html',
  styleUrl: './text-area-input.scss'
})
export class TextAreaInput {

@Input() config!: TextAreaInputConfig;
}
