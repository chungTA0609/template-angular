import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from '../../services/layout/layout.service';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, StyleClassModule, SidebarComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  searchActive: boolean = false;
  @ViewChild('menubutton') menuButton!: ElementRef;
  @ViewChild('searchinput') searchInput!: ElementRef;
  @ViewChild(SidebarComponent) appSidebar!: SidebarComponent;
  constructor(private layoutServices: LayoutService, public el: ElementRef) {}

  deactivateSearch() {
    this.searchActive = false;
  }

  activateSearch() {
    this.searchActive = true;
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 100);
  }

  onConfigButtonClick() {
    this.layoutServices.showConfigSidebar();
  }

  onSidebarButtonClick() {
    this.layoutServices.showSidebar();
  }
  onMenuButtonClick() {
    this.layoutServices.onMenuToggle();
  }
}
