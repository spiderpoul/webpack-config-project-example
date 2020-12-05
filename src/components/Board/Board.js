import DomElement from "../DomElement/DomElement";
import css from "./board.module.css";
import html from './board.html'

console.log(css);

export class Board {
    constructor() {
        this.element = new DomElement({
            className: css.header,
            html,
        }).element;
    }
}
