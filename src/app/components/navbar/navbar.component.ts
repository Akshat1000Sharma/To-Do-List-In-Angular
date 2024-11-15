import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentRoute: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.currentRoute = '';
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onWindowScroll);
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = event.urlAfterRedirects;
        }
      });
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
