import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputConfig } from './interfces/text-input-config.interface';

@Component({
  selector: 'app-text-input',
  imports: [ReactiveFormsModule],
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss'
})
export class TextInput {
  @Input() config!: TextInputConfig;

}
