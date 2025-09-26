import { Component, inject, Input } from '@angular/core';
import { Section } from './interfaces/section.interface';
import { FormArray, FormGroup } from '@angular/forms';
import { DropDown } from '../drop-down/drop-down';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-section',
  imports: [DropDown, CommonModule, FormsModule],
  templateUrl: './add-section.html',
  styleUrl: './add-section.scss',
})
export class AddSection {
  sections = [
    {
      sectionId: 0,
      sectionTitle: '',
      sectionItems: [
        {
          itemNameAr: '',
          itemNameEn: '',
        },
      ] as Array<{ itemNameAr: string; itemNameEn: string }>,
    },
  ];

  removeItem(sectionIndex: number, itemIndex: number) {
    this.sections[sectionIndex].sectionItems.splice(itemIndex, 1);
  }

  addItem(sectionIndex: number) {
    this.sections[sectionIndex].sectionItems.push({
      itemNameAr: '',
      itemNameEn: '',
    });
  }

  addSection() {
    this.sections.push({ sectionId: this.sections.length, sectionTitle: '', sectionItems: [] });
  }
  logSections() {
  console.log(this.sections);
}
}
