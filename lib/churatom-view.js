'use babel';

import ReactDOM from 'react-dom';
import React from 'react';
import SelectListView from 'atom-space-pen-views'


const List = (props) => {
  const directories = atom.project.getDirectories()
  console.log(directories)
  return (
    <div className='primary-line'>
      <atom-panel class='padded'>
        <div class="inset-panel">
          <div class="panel-heading">An inset-panel heading</div>
          <div class="panel-body padded" onClick={props.handleClick}>Some Content</div>
        </div>
      </atom-panel>
      <atom-panel class='padded'>
        <div class="inset-panel">
          <div class="panel-heading">An inset-panel heading</div>
          <div class="panel-body padded">Some Content</div>
        </div>
      </atom-panel>
      <atom-panel class='padded'>
        <div class="inset-panel">
          <div class="panel-heading">An inset-panel heading</div>
          <div class="panel-body padded">Some Content</div>
        </div>
      </atom-panel>
    </div>
  )
}
export default class ChuratomView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.id = 'app'
    this.element.classList.add('churatom');

    ReactDOM.render(<List title='string' handleClick={() => this.open()}/>, this.element);
  }
  
  open() {
    console.log(103)
     const uri = '/users/churabou/github/churatom/LICENSE.md';
     const options = {};
     options.initialLine = 3;
     
     atom.workspace.open(uri, options)
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
