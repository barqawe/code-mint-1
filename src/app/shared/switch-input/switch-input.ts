import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SwitchInputConfig } from './interfaces/switch-input.interface';

@Component({
  selector: 'app-switch-input',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './switch-input.html',
  styleUrl: './switch-input.scss'
})
export class SwitchInput {
  @Input() config!: SwitchInputConfig;
}
