import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { LayoutService } from '../../services/layout/layout.service';
import { CommonModule } from '@angular/common';

interface Breadcrumb {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();
  @ViewChild('searchinput') searchInput!: ElementRef;
  searchActive: boolean = false;

  constructor(private router: Router, public layoutService: LayoutService) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs: Breadcrumb[] = [];
        this.addBreadcrumb(root, [], breadcrumbs);

        this._breadcrumbs$.next(breadcrumbs);
      });
  }

  activateSearch() {
    this.searchActive = true;
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 100);
  }

  deactivateSearch() {
    this.searchActive = false;
  }

  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }

  onSidebarButtonClick() {
    this.layoutService.showSidebar();
  }

  private addBreadcrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: Breadcrumb[]
  ) {
    const routeUrl = parentUrl.concat(route.url.map((url) => url.path));
    const breadcrumb = route.data['breadcrumb'];
    const parentBreadcrumb =
      route.parent && route.parent.data
        ? route.parent.data['breadcrumb']
        : null;

    if (breadcrumb && breadcrumb !== parentBreadcrumb) {
      breadcrumbs.push({
        label: route.data['breadcrumb'],
        url: '/' + routeUrl.join('/'),
      });
    }

    if (route.firstChild) {
      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }
}
