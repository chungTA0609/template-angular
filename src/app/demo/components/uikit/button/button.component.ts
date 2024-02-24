import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    ToggleButtonModule,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() icon: string = '';
  @Input() type: string = '';
  @Input() className: string = '';
  @Input() disabled: boolean = false;
  @Input() shape: string[] = [];
  items: MenuItem[] = [];
  classButton: string = '';
  loading = [false, false, false, false];
  ngOnInit() {
    this.items = [
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-times' },
      {
        label: 'Angular.io',
        icon: 'pi pi-info',
        url: 'http://angular.io',
      },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog' },
    ];
    this.classButton =
      this.className + this.shape.map((e) => 'p-button-' + e).join(' ');
  }

  load(index: number) {
    this.loading[index] = true;
    setTimeout(() => (this.loading[index] = false), 1000);
  }
}
