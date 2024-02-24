import { Component } from '@angular/core';
import { LayoutService } from '../services/layout/layout.service';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [RouterModule, StyleClassModule],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss',
})
export class NotfoundComponent {
  constructor(public layoutService: LayoutService) {}
}
