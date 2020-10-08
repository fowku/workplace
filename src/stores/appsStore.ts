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
    [WindowsEnum.TERMINAL, { isOpen: false, isActive: false }],
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
    const appStatus = this.getAppStatus(appName);

    if (typeof appStatus !== 'undefined') {
      this.appsStatuses.set(appName, { ...appStatus, isOpen: true });
    }
  }

  /**
   * Close application by name
   * @param appName application name
   */
  @action.bound
  public closeApplication(appName: WindowsEnum): void {
    const appStatus = this.getAppStatus(appName);

    if (typeof appStatus !== 'undefined') {
      this.appsStatuses.set(appName, { ...appStatus, isOpen: false });
    }
  }

  // @action.bound
  // public activateApplication(appName: WindowsEnum): void {
  //   this.appsStatus.set(appName, {})
  // }

  private getAppStatus(appName: WindowsEnum): AppStatus | undefined {
    return this.appsStatuses.get(appName);
  }
}

export default new AppsStore();
