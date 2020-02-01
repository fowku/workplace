import { observable, action } from 'mobx';

class StartbarStore {
  @observable playerIsOpen = false;
  @observable browserIsOpen = false;
  @observable messangerIsOpen = false;
  @observable notesIsOpen = false;
  @observable terminalIsOpen = false;
  @observable binIsOpen = false;

  @action.bound
  toggleApplication(appName: string): void {
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
