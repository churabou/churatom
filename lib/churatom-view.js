'use babel';

import ReactDOM from 'react-dom';
import React from 'react';
import SelectListView from 'atom-space-pen-views'


const List = (props) => {
  
  // console.log(history.files);
  const files = (atom.oreHistory.files || ['111', '222']);
  
  return (
      <atom-panel class='padded'>
        <div class='select-list'>
          <ol class='list-group'>
           { files.map(file => <li onClick={() => props.handleClick(file)}> {file} </li>) }
          </ol>
        </div>  
      </atom-panel>
  )
}
export default class ChuratomView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.id = 'app'
    this.element.classList.add('churatom');
  }
  
  reload() {
    ReactDOM.render(<List title='string' handleClick={(uri) => this.open(uri)}/>, this.element);
  }
  
  open(uri) {
     const options = {};
     options.initialLine = 3;
     atom.workspace.open(uri, options);
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
