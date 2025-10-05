import { Component, Output,EventEmitter, inject, signal, effect } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Layout } from '../../layout';

@Component({
  selector: 'app-side-menu',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss'
})
export class SideMenu {
  constructor(private layout:Layout) {
    effect(() => {
      console.log(`hehehehhehehah: ${this.counter()}`);
    });
  }
  @Output() toggle = new EventEmitter<boolean>();
  isOpen:boolean = true;
  counter=signal([0,1,2,3,4]);
  toggleMenu() {
    this.counter.update(arr=> [...arr,arr.length]);
    this.isOpen = !this.isOpen;
    this.toggle.emit(this.isOpen);
  }
  }


