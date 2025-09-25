import { Component ,Input} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DropDownConfig } from './interfaces/drop-down.interface';

@Component({
  selector: 'app-drop-down',
  imports: [ReactiveFormsModule],
  templateUrl: './drop-down.html',
  styleUrl: './drop-down.scss'
})
export class DropDown {
  @Input()config!: DropDownConfig;


}
