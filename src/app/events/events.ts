import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TextInput } from "../text-input/text-input";

@Component({
  selector: 'app-events',
  imports: [TextInput, ReactiveFormsModule],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events {

  constructor() {
  }

  private fb =  inject(FormBuilder);

  eventForm = this.fb.group({
    eventNameEn: [''],
    eventNameAr: [''],
    eventDescriptionEn: [''],
    eventDescriptionAr: [''],
    eventDate: [''],
    eventTime: [''],
    eventPictures: [''] ,
    eventprice: [''],
    eventSubCategory: [''] , 
    eventAvailableQuantity: [''],
  });

  get eventNameEn() {
    return this.eventForm.controls.eventNameEn;
  }

  onSubmit(): void {
    console.log(this.eventForm.controls.eventNameEn.value);
  }

}
