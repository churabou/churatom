'use babel';

import ChuratomView from './churatom-view';
import { CompositeDisposable } from 'atom';

export default {

  churatomView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.churatomView = new ChuratomView(state.churatomViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.churatomView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this viewtogto
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'churatom:toggle': () => this.toggle()
    }));
    
    
    atom.workspace.onDidOpen((event) => {
      // ファイル
      console.log(`${event.url}を開いた`);
    });
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.churatomView.destroy();
  },

  serialize() {
    return {
      churatomViewState: this.churatomView.serialize()
    };
  },

  toggle() {
    console.log('Churatom was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
