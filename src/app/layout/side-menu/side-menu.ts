import { Component, Output, EventEmitter, inject, signal, effect, HostListener } from '@angular/core';
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
  constructor() {
    this.checkScreenSize();
  }

    menuItems = signal([
    {
      routerLink: '/',
      isActiveIcon: '/side-menu-icons/active-academic-year.svg',
      inactiveIcon: '/side-menu-icons/non-active-academic-year.svg',
      hoverIcon: '/side-menu-icons/active-academic-year.svg',
      text: 'Event Form',
      exact: true,
      isActive: false,
      isHovered: false,
    },
    {
      routerLink: null,
      isActiveIcon: '/side-menu-icons/non-active-graduate-attributes.svg',
      inactiveIcon: '/side-menu-icons/non-active-graduate-attributes.svg',
      hoverIcon: '/side-menu-icons/non-active-graduate-attributes.svg',
      text: 'Grad Attributes',
      exact: false,
      isActive: false,
      isHovered: false, 
    },
    {
      routerLink: '/nqfd',
      isActiveIcon: '/side-menu-icons/active-national-qualifications-framework-descriptors.svg',
      inactiveIcon: '/side-menu-icons/non-active-national-qualifications-framework-descriptors.svg',
      hoverIcon: '/side-menu-icons/active-national-qualifications-framework-descriptors.svg',
      text: 'NQF Descriptors',
      exact: true,
      isActive: false,
      isHovered: false, 
    },
    {
      routerLink: null,
      isActiveIcon: '/side-menu-icons/non-active-evaluation-criterion.svg',
      inactiveIcon: '/side-menu-icons/non-active-evaluation-criterion.svg',
      hoverIcon: '/side-menu-icons/non-active-evaluation-criterion.svg',
      text: 'Evaluation criterion',
      exact: false,
      isActive: false,
      isHovered: false, 
    },
    {
      routerLink: null,
      isActiveIcon: '/side-menu-icons/non-active-program.svg',
      inactiveIcon: '/side-menu-icons/non-active-program.svg',
      hoverIcon: '/side-menu-icons/non-active-program.svg',
      text: 'Programs',
      exact: false,
      isActive: false,
      isHovered: false,
    },
    {
      routerLink: null,
      isActiveIcon: '/side-menu-icons/non-active-course.svg',
      inactiveIcon: '/side-menu-icons/non-active-course.svg',
      hoverIcon: '/side-menu-icons/non-active-course.svg',
      text: 'Courses',
      exact: false,
      isActive: false,
      isHovered: false, 
    },
    {
      routerLink: null,
      isActiveIcon: '/side-menu-icons/non-active-graduate-attributes.svg',
      inactiveIcon: '/side-menu-icons/non-active-graduate-attributes.svg',
      hoverIcon: '/side-menu-icons/non-active-graduate-attributes.svg',
      text: 'C.Sections',
      exact: false,
      isActive: false ,
      isHovered: false, 
    }
  ]);

  public layout = inject(Layout);

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && this.layout.sideMenuOpen()) {
      this.layout.sideMenuOpen.set(false);
    }
  }

  toggleMenu() {
    this.layout.sideMenuOpen.update(value => !value);
  }

  get menuItemsList() {
    return this.menuItems();
  }


}


