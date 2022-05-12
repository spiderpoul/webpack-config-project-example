export default class DomElement {
   element = null;

  constructor(tagName = 'div', options) {
      const { className, innerHTML } = options;
      this.element = document.createElement(tagName);

      if (className) {
        this.element.classList.add(className);
      }

      if (innerHTML) {
        this.element.innerHTML = innerHTML;
      }
  }

  addClass(className) {
    if (className) this.element.classList.add(className);
  }

  removeClass(className) {
      this.element.classList.remove(className);
  }

  removeElement() {
      this.element.remove();
  }

  appendToElement(target) {
    target.appendChild(this.element);
  }
}