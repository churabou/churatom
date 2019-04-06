'use babel';

import ReactDOM from 'react-dom';
import React from 'react'; 

export default class ChuratomView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.id = 'app'
    this.element.classList.add('churatom');

    const e = <h1>Hello, world</h1>;
    ReactDOM.render(e, this.element);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
