import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  @ViewChild('myInput') myInput!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onWindowScroll);
    }
  }

  setFocus(id: string) {
    if (isPlatformBrowser(this.platformId)) {
      const element = this[id as keyof this] as ElementRef;
      if (element) {
        element.nativeElement.focus();
      }
    }
  }

  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }
}
