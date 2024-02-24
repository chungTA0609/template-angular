import { Injectable, effect, signal } from '@angular/core';
import { Subject } from 'rxjs';

export type MenuMode =
  | 'static'
  | 'overlay'
  | 'horizontal'
  | 'slim'
  | 'slim-plus'
  | 'reveal'
  | 'drawer';

export type ColorScheme = 'light' | 'dark';

export interface AppConfig {
  colorScheme: ColorScheme;
  theme: string;
  ripple: boolean;
  menuMode: MenuMode;
  scale: number;
}

interface LayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  rightMenuActive: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
  sidebarActive: boolean;
  anchored: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  _config: AppConfig = {
    ripple: false,
    menuMode: 'static',
    colorScheme: 'dark',
    theme: 'magenta',
    scale: 14,
  };
  state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    rightMenuActive: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
    sidebarActive: false,
    anchored: false,
  };
  private configUpdate = new Subject<AppConfig>();

  private overlayOpen = new Subject<any>();
  
  config = signal<AppConfig>(this._config);

  configUpdate$ = this.configUpdate.asObservable();
  overlayOpen$ = this.overlayOpen.asObservable();
  constructor() {
    effect(() => {
      const config = this.config();
      if (this.updateStyle(config)) {
        this.changeTheme();
      }
      this.changeScale(config.scale);
      this.onConfigUpdate();
    });
  }

  onMenuToggle() {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        //
      }
    }
    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive =
        !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

      if (this.state.staticMenuMobileActive) {
        // this.overlayOpen.next(null);
      }
    }
  }
  updateStyle(config: AppConfig) {
    return (
      config.theme !== this._config.theme ||
      config.colorScheme !== this._config.colorScheme
    );
  }

  changeTheme() {
    const config = this.config();
    const themeLink = <HTMLLinkElement>document.getElementById('theme-link');
    const themeLinkHref = themeLink.getAttribute('href')!;
    const newHref = themeLinkHref
      .split('/')
      .map((el) =>
        el == this._config.theme
          ? (el = config.theme)
          : el == `theme-${this._config.colorScheme}`
          ? (el = `theme-${config.colorScheme}`)
          : el
      )
      .join('/');

    // this.replaceThemeLink(newHref);
  }

  onOverlaySubmenuOpen() {
    this.overlayOpen.next(null);
  }
  changeScale(value: number) {
    document.documentElement.style.fontSize = `${value}px`;
  }

  onConfigUpdate() {
    this._config = { ...this.config() };
    this.configUpdate.next(this.config());
  }

  showConfigSidebar() {
    this.state.configSidebarVisible = true;
  }

  showSidebar() {
    this.state.rightMenuActive = true;
  }
  isOverlay() {
    return this.config().menuMode === 'overlay';
  }

  isDesktop() {
    return window.innerWidth > 991;
  }

  isSlim() {
    return this.config().menuMode === 'slim';
  }

  isSlimPlus() {
    return this.config().menuMode === 'slim-plus';
  }

  isHorizontal() {
    return this.config().menuMode === 'horizontal';
  }

  isMobile() {
    return !this.isDesktop();
  }
}
