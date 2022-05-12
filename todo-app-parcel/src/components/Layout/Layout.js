import DomElement from '../DomElement/DomElement'
import * as css from './Layout.module.scss'

export default class Layout extends DomElement {
  constructor() {
    const options = {
      className: 'layout',
      innerHTML: `
          <header class="${css.header} flex-end">todos</header>
          <main id="main" class="${css.main} flex-end"></main>
          <footer class="footer"></footer>
      `
    };
    
    super('div', options);
  }
};