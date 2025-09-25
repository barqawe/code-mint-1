import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesUpload } from './images-upload';

describe('ImagesUpload', () => {
  let component: ImagesUpload;
  let fixture: ComponentFixture<ImagesUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
