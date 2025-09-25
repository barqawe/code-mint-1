import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {labeledTextInputConfig} from './interfaces/labeled-text-input.interface';

@Component({
  selector: 'app-labeled-text-input',
  imports: [ReactiveFormsModule],
  templateUrl: './labeled-text-input.html',
  styleUrl: './labeled-text-input.scss'
})
export class LabeledTextInput {
@Input()config!: labeledTextInputConfig;
}
