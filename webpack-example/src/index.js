import { Board } from "./components/Board/Board";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./main.css";

const header = new Header();
const board = new Board();
const footer = new Footer();

document.body.appendChild(header.element);
document.body.appendChild(board.element);
document.body.appendChild(footer.element);
