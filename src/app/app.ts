import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <nav style="padding:.5rem; border-bottom:1px solid #ddd">
      <a
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        Home
      </a>
      |
      <a routerLink="/about" routerLinkActive="active">
        About
      </a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [`
    nav a.active {
      color: orange;
    }
  `]
})
export class App {}
