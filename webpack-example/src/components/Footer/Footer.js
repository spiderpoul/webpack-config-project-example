import DomElement from '../DomElement/DomElement'
import css from './footer.module.css'
import img from '../../img/webpack.png'

export class Footer {
  constructor() {
    this.element = new DomElement({
      type: 'footer',
      className: css.footer,
      html: `
        <div>
          <img class="${css.footerImg}" src="${img}" />
        </div>
      `
    }).element
  }
}