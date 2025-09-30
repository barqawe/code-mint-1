import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { TextInput } from '../../shared/text-input/text-input';
import { TextAreaInput } from '../../shared/text-area-input/text-area-input';
import { DateInput } from '../../shared/date-input/date-input';
import { TimeInput } from '../../shared/time-input/time-input';
import { ImagesUpload } from '../../shared/images-upload/images-upload';
import { LabeledTextInput } from '../../shared/labeled-text-input/labeled-text-input';
import { DropDown } from '../../shared/drop-down/drop-down';
import { SwitchInput } from "../../shared/switch-input/switch-input";

@Component({
  selector: 'app-events',
  imports: [
    TextInput,
    ReactiveFormsModule,
    TextAreaInput,
    DateInput,
    TimeInput,
    ImagesUpload,
    LabeledTextInput,
    DropDown,
    SwitchInput,
  ],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events {
  private fb = inject(FormBuilder);

  constructor() { }


  eventMediaContent: object[] = [];
  eventForm = this.fb.group({
    eventNameEn: [''],
    eventNameAr: [''],
    eventDescriptionEn: ['', Validators.required],
    eventDescriptionAr: ['', Validators.required],
    eventDate: [''],
    eventTime: [''],
    active: [true],
    eventprice: ['', Validators.required],
    eventSubCategory: ['', Validators.required],
    eventAvailableQuantity: ['', Validators.required],
    requirements: this.fb.array([]),
    benefits: this.fb.array([]),
    restrictions: this.fb.array([]),
  });

  get eventNameEn() {
    return this.eventForm.controls.eventNameEn;
  }

  addItem(formArrayName: string): void {
    const formArray = this.eventForm.get(formArrayName) as FormArray;
    formArray.push(this.fb.group({
      itemNameEn: ['', Validators.required],
      itemNameAr: ['', Validators.required],
    }));
  }

  delete(formArrayItem: string, index: number): void {
    const formArray = this.eventForm.get(formArrayItem) as FormArray;
    formArray.removeAt(index);
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const filteredData = Object.fromEntries(
        Object.entries(this.eventForm.value).filter(([key, value]) =>
          value !== '' && value !== null && value !== undefined &&
          !(Array.isArray(value) && value.length === 0)
        )
      );
      

      console.log('th data of the Form :', filteredData);
      console.log('Event Media Content:', this.eventMediaContent);
    }
    else {
      console.log('Form is invalid');
    }
  }

  // i should implement its value to form Group 
  onImagesSelected(images: object[]): void {
    this.eventMediaContent = images;
  }

}
