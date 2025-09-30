import { SelectorlessMatcher } from '@angular/compiler';
import { Component, Output , EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-images-upload',
  imports: [ReactiveFormsModule],
  templateUrl: './images-upload.html',
  styleUrl: './images-upload.scss'
})
export class ImagesUpload {
@Output() imagesSelected = new EventEmitter<object[]>();


  selectedImagesObj: object[] = [];
  selectedImages: string[] = [];
  maxImagesCount: number = 5;
  
  onImageSelected(event: any): void {
    const files = event.target.files;
    this.selectedImagesObj.push(files);
    for (let file of files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImages.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    
    this.maxImagesCount = Math.max(0, this.maxImagesCount - files.length);
            this.imagesSelected.emit(this.selectedImagesObj as object[]);
  }
}
