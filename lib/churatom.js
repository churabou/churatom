'use babel';

import ChuratomView from './churatom-view';
import { CompositeDisposable } from 'atom';


export default {

  churatomView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.churatomView = new ChuratomView(state.churatomViewState);
    
    this.churatomView.open = (uri) => {
      const options = {};
      options.initialLine = 3;
      atom.workspace.open(uri, options);
      this.modalPanel.hide();
    };

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
    
    // namespace:action
    // namespace will typically be the name of your package
    
    this.subscriptions.add(atom.commands.add('churatom', {
      'churatom:select-next-history': () => this.toggle()
    }));
    
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
    if (this.modalPanel.isVisible()) {
      this.modalPanel.hide();
    } else {
      this.churatomView.reload();
      this.modalPanel.show()
    }
  }
};
