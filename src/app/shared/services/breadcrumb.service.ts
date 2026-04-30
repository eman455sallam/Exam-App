import { inject,  Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {

  
  private readonly _breadcrumbs$ = new BehaviorSubject<MenuItem[]>([]);
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  
  constructor() {
    this.initBreadcrumbsListener();
    this.buildBreadcrumbs();
  }

  
  // Init listener
  private initBreadcrumbsListener(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.buildBreadcrumbs();
      });
  }

  
  // Build breadcrumbs
  private buildBreadcrumbs(): void {
    const root = this.activatedRoute.root.snapshot;
    const breadcrumbs: MenuItem[] = [];

    this.buildFromRoute(root, [], breadcrumbs);

    this._breadcrumbs$.next(breadcrumbs);
  }

  // builder
  private buildFromRoute(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: MenuItem[]
  ): void {

    if (!route) return;

    const routeUrl = parentUrl.concat(
      route.url.map(segment => segment.path)
    );

    if (route.data?.['breadcrumb']) {

      const url = '/' + routeUrl.join('/');
      const last = breadcrumbs[breadcrumbs.length - 1];

      // prevent duplicates
      if (!last || last.routerLink !== url) {
        breadcrumbs.push({
          label: route.data['breadcrumb'],
          routerLink: url
        });
      }
    }

    if (route.firstChild) {
      this.buildFromRoute(route.firstChild, routeUrl, breadcrumbs);
    }
  }

  // Dynamic update (API)
  setCustomBreadcrumb(name: string): void {

    const updated = [...this._breadcrumbs$.value];
    const lastIndex = updated.length - 1;

    if (lastIndex >= 0) {
      updated[lastIndex] = {
        ...updated[lastIndex],
        label: name
      };
    }

    this._breadcrumbs$.next(updated);
  }
}