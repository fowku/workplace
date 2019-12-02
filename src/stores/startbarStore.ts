import { observable, action } from 'mobx';

class StartbarStore {
  @observable playerIsOpen: boolean = false;
  @observable browserIsOpen: boolean = false;
  @observable messangerIsOpen: boolean = false;
  @observable notesIsOpen: boolean = false;
  @observable terminalIsOpen: boolean = false;
  @observable binIsOpen: boolean = false;

  @action.bound
  openApplication(appName: string) {
    switch (appName) {
      case 'player':
        this.playerIsOpen = true;
        break;

      case 'browser':
        this.browserIsOpen = true;
        break;

      case 'messanger':
        this.messangerIsOpen = true;
        break;

      case 'notes':
        this.notesIsOpen = true;
        break;

      case 'terminal':
        this.terminalIsOpen = true;
        break;

      case 'bin':
        this.binIsOpen = true;
        break;

      default:
        break;
    }
  }
}

export default new StartbarStore();