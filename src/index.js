import Log from "./log";
import Calc from "./calc";
import logo from './React-logo.png'


const calc = new Calc();
const log = new Log();

log.log(calc.add(1, 2, 3, 4))

const el = document.createElement('img');
el.src = logo;
document.body.appendChild(el)