import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SwitchInputConfig } from './interfaces/switch-input.interface';

@Component({
  selector: 'app-switch-input',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './switch-input.html',
  styleUrl: './switch-input.scss'
})
export class SwitchInput implements OnInit{
  @Input() config!: SwitchInputConfig;

  inputText?:string ;

  ngOnInit(): void {
    this.inputText = this.config.control.value ? 'Active' : 'Inactive';
    
  }

  toggleSwitch() {
  if(this.config.control.value === null || this.config.control.value === false){
    this.config.control.patchValue(true);
      this.inputText = 'Active'; 
      
    }else {
      this.config.control.patchValue(false);
      this.inputText = 'Inactive';
    } ;
console.log(this.config.control.value);

  }
}
