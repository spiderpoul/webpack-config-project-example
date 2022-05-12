import DomElement from "../DomElement/DomElement";
import css from "./header.module.css";

export class Header {
    constructor() {
        this.element = new DomElement({
            type: "header",
            className: css.header,
            html: "<h3>Kanban</h3>",
        }).element;
    }
}
