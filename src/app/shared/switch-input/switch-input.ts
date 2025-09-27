import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-input',
  imports: [ReactiveFormsModule],
  templateUrl: './switch-input.html',
  styleUrl: './switch-input.scss'
})
export class SwitchInput {
@Input() formControl: any;

}
