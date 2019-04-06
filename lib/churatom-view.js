'use babel';

export default class ChuratomView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('churatom');

    // Create message element
      const ol = document.createElement('ol');
      this.element.appendChild(ol);
      
      const items = [...Array(10)].map((_,i) => `item${i}`)
      items.forEach((text) => {
        const item = document.createElement('li');
        item.textContent = text;
        ol.appendChild(item);
      });
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
