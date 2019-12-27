import { observable, action } from 'mobx';

class StartbarStore {
  @observable playerIsOpen: boolean = false;
  @observable browserIsOpen: boolean = false;
  @observable messangerIsOpen: boolean = false;
  @observable notesIsOpen: boolean = false;
  @observable terminalIsOpen: boolean = false;
  @observable binIsOpen: boolean = false;

  @action.bound
    toggleApplication(appName: string) {
    switch (appName) {
      case 'player':
        this.playerIsOpen = !this.playerIsOpen;
        break;

      case 'browser':
        this.browserIsOpen = !this.browserIsOpen;
        break;

      case 'messanger':
        this.messangerIsOpen = !this.messangerIsOpen;
        break;

      case 'notes':
        this.notesIsOpen = !this.notesIsOpen;
        break;

      case 'terminal':
        this.terminalIsOpen = !this.terminalIsOpen;
        break;

      case 'bin':
        this.binIsOpen = !this.binIsOpen;
        break;

      default:
        break;
    }
  }
}

export default new StartbarStore();