import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from '../../services/layout/layout.service';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, MenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @ViewChild('menuContainer') menuContainer!: ElementRef;
  timeout: any = null;

  constructor(public layoutServices: LayoutService, public el: ElementRef) {}

  onMouseEnter() {
    if (!this.layoutServices.state.anchored) {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
      this.layoutServices.state.sidebarActive = true;
    }
  }
  onMouseLeave() {
    if (!this.layoutServices.state.anchored) {
      if (!this.timeout) {
        this.timeout = setTimeout(
          () => (this.layoutServices.state.sidebarActive = false),
          300
        );
      }
      this.layoutServices.state.sidebarActive = true;
    }
  }
  anchor() {
    this.layoutServices.state.anchored = !this.layoutServices.state.anchored;
  }
}
