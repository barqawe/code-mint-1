import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInput } from '../../shared/text-input/text-input';
import { TextAreaInput } from '../../shared/text-area-input/text-area-input';
import { DateInput } from '../../shared/date-input/date-input';
import { TimeInput } from '../../shared/time-input/time-input';
import { ImagesUpload } from '../../shared/images-upload/images-upload';
import { LabeledTextInput } from '../../shared/labeled-text-input/labeled-text-input';
import { DropDown } from '../../shared/drop-down/drop-down';
import { AddSection } from "../../shared/add-section/add-section";
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
    AddSection,
    SwitchInput
  ],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events {
  constructor() { }

  private fb = inject(FormBuilder);
  eventSections: any[] = [];
  eventMediaContent: string[] = [];
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
    eventSections: this.fb.array([
      this.fb.group({
        sectionTitle: [''],
        sectionItems: this.fb.array([])
      }),
    ]),
  });

  get eventNameEn() {
    return this.eventForm.controls.eventNameEn;
  }




  onSectionsChange(sections: any[]): void {
    this.eventSections = sections;
    const sectionsFormArray = this.fb.array(
      sections.map(section =>
        this.fb.group({
          sectionTitle: [section.sectionTitle || ''],
          sectionItems: this.fb.array(
            section.sectionItems?.map((item: any) =>
              this.fb.group({
                itemNameAr: [item.itemNameAr || ''],
                itemNameEn: [item.itemNameEn || '']
              })
            ) || []
          )
        })
      )
    );

    this.eventForm.setControl('eventSections', sectionsFormArray);
  }
  onSubmit(): void {
    console.log('Event Sections (property):', this.eventSections);
    console.log('Event Sections (form):', this.eventForm.controls.eventSections.value);
    console.log('Complete Form:', this.eventForm.value);
  }

  // i should implement its value to form Group 
  onImagesSelected(images: string[]): void {
    this.eventMediaContent = images;
  }
}
