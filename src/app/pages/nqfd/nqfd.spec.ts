import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nqfd } from './nqfd';

describe('Nqfd', () => {
  let component: Nqfd;
  let fixture: ComponentFixture<Nqfd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nqfd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nqfd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
