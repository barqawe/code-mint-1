import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledTextInput } from './labeled-text-input';

describe('LabeledTextInput', () => {
  let component: LabeledTextInput;
  let fixture: ComponentFixture<LabeledTextInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabeledTextInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabeledTextInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
