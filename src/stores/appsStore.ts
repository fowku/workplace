// libs
import { observable, action } from 'mobx';

// enums
import { WindowsEnum } from '../components/Window/enum/windows.enum';

export type AppStatus = {
  isOpen: boolean;
  isActive: boolean;
};

class AppsStore {
  @observable
  public appsStatuses = new Map<WindowsEnum, AppStatus>([
    [WindowsEnum.PLAYER, { isOpen: false, isActive: false }],
    [WindowsEnum.BROWSER, { isOpen: false, isActive: false }],
    [WindowsEnum.MESSANGER, { isOpen: false, isActive: false }],
    [WindowsEnum.NOTES, { isOpen: false, isActive: false }],
    [WindowsEnum.TERMINAL, { isOpen: true, isActive: true }],
    [WindowsEnum.BIN, { isOpen: false, isActive: false }],
  ]);

  public highestZOrder = 1;

  /**
   * Increment highestZOrder
   */
  public incrementZOrder(): void {
    this.highestZOrder++;
  }

  /**
   * Open application by name
   * @param appName application name
   */
  @action.bound
  public openApplication(appName: WindowsEnum): void {
    this.appsStatuses.set(appName, { isActive: true, isOpen: true });
  }

  /**
   * Close application by name
   * @param appName application name
   */
  @action.bound
  public closeApplication(appName: WindowsEnum): void {
    this.appsStatuses.set(appName, { isActive: false, isOpen: false });
  }

  /**
   * Activate application
   * @param appName application name
   */
  @action.bound
  public activateApplication(appName: WindowsEnum): void {
    const appStatus = this.appsStatuses.get(appName);

    if (typeof appStatus !== 'undefined') {
      this.appsStatuses.set(appName, { ...appStatus, isActive: true });
    }
  }

  /**
   * Disable application
   * @param appName application name
   */
  @action.bound
  public disableApplication(appName: WindowsEnum): void {
    const appStatus = this.appsStatuses.get(appName);

    if (typeof appStatus !== 'undefined') {
      this.appsStatuses.set(appName, { ...appStatus, isActive: false });
    }
  }

  /**
   * Get info if application is opened
   * @param appName application name
   */
  public isAppOpen(appName: WindowsEnum): boolean {
    const appStatus = this.appsStatuses.get(appName);
    return typeof appStatus !== 'undefined' ? appStatus.isOpen : false;
  }

  /**
   * Get info if application is active
   * @param appName application name
   */
  public isAppActive(appName: WindowsEnum): boolean {
    const appStatus = this.appsStatuses.get(appName);
    return typeof appStatus !== 'undefined' ? appStatus.isActive : false;
  }

  /**
   * Get application current status
   * @param appName application name
   */
  private getAppStatus(appName: WindowsEnum): AppStatus | undefined {
    return this.appsStatuses.get(appName);
  }
}

export default new AppsStore();
