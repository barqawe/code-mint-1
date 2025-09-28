import { Component, inject, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-section',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-section.html',
  styleUrl: './add-section.scss',
})
export class AddSection implements OnInit {
  @Output() sectionsChange = new EventEmitter<any[]>();
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
    this.sections.push({ sectionId: this.sections.length, sectionTitle: '', sectionItems: [{
      itemNameAr: '',
      itemNameEn: '',
    }] });
  }

  ngOnInit() {
    this.emitSections();
  }

  emitSections() {
    this.sectionsChange.emit(this.sections);
  }
}
