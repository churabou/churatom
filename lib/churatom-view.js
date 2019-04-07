'use babel';

import ReactDOM from 'react-dom';
import React from 'react';
import SelectListView from 'atom-space-pen-views'


const List = (props) => {
  // console.log(history.files);
  const files = atom.history.files;
  return (
      <atom-panel class='padded'>
        <div class='select-list'>
          <ol class='list-group'>
           { files.map(file => <li onClick={() => props.handleClick(file.path)}> {file.name} </li>) }
          </ol>
        </div>
        
      </atom-panel>
  );
}
export default class ChuratomView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
  }
  
  reload() {
    ReactDOM.render(<List title='string' handleClick={(uri) => this.open(uri)}/>, this.element);
  }
  
  open(uri) {

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
