import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private renderer: Renderer2) {}

  toggleMenu(): void {
    const nav = document.querySelector('.overlay-menu') as HTMLElement;

    if (nav.style.transform !== 'translateX(0%)') {
      this.renderer.setStyle(nav, 'transform', 'translateX(0%)');
      this.renderer.setStyle(nav, 'transition', 'transform 0.2s ease-out');
    } else {
      this.renderer.setStyle(nav, 'transform', 'translateX(-100%)');
      this.renderer.setStyle(nav, 'transition', 'transform 0.2s ease-out');
    }
  }

}
