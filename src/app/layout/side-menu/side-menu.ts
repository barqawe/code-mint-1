import { Component, Output, EventEmitter, inject, signal, effect } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Layout } from '../../layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  imports: [NgClass, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss'
})
export class SideMenu {
  constructor(public layout: Layout) {
  }

  toggleMenu() {
    this.layout.toggleSideMenu();
  }

  menuItems = [
    {
      routerLink: '/',
      isActiveIcon: '/side-menu-icons/active-academic-year.svg',
      inactiveIcon: '/side-menu-icons/non-active-academic-year.svg',
      text: 'Event Form',
      exact: true,
      isActive: false
    },
    {
      routerLink: null,
      isActiveIcon: '/side-menu-icons/non-active-graduate-attributes.svg',
      inactiveIcon: '/side-menu-icons/non-active-graduate-attributes.svg',
      text: 'Grad Attributes',
      exact: false,
      isActive: false
    },
    {
      routerLink: '/nqfd',
      isActiveIcon: '/side-menu-icons/active-national-qualifications-framework-descriptors.svg',
      inactiveIcon: '/side-menu-icons/non-active-national-qualifications-framework-descriptors.svg',
      text: 'NQF Descriptors',
      exact: true,
      isActive: false
    },
    {
      routerLink: null,
      isActiveIcon: '/side-menu-icons/non-active-evaluation-criterion.svg',
      inactiveIcon: '/side-menu-icons/non-active-evaluation-criterion.svg',
      text: 'Evaluation criterion',
      exact: false,
      isActive: false
    },
    {
      routerLink: null,
      isActiveIcon: '/side-menu-icons/non-active-program.svg',
      inactiveIcon: '/side-menu-icons/non-active-program.svg',
      text: 'Programs',
      exact: false,
      isActive: false
    },
    {
      routerLink: null,
      isActiveIcon: '/side-menu-icons/non-active-course.svg',
      inactiveIcon: '/side-menu-icons/non-active-course.svg',
      text: 'Courses',
      exact: false,
      isActive: false
    },
    {
      routerLink: null,
      isActiveIcon: '/side-menu-icons/non-active-graduate-attributes.svg',
      inactiveIcon: '/side-menu-icons/non-active-graduate-attributes.svg',
      text: 'C.Sections',
      exact: false,
      isActive: false
    }
  ];
}


