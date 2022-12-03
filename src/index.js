"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const planet_1 = require("./planet");
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    let bolygok;
    let x = 0;
    let darab = document.getElementById('darab');
    let atlag = document.getElementById('atlag');
    (_a = document.getElementById('gomb')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b, _c, _d;
        let nevEll = /^[a-zA-z" ",]+$/;
        let nev = (_a = document.getElementById('nev')) === null || _a === void 0 ? void 0 : _a.value;
        let nameHiba = document.getElementById('namehiba');
        let eletkor = parseInt((_b = document.getElementById('eletkor')) === null || _b === void 0 ? void 0 : _b.value);
        let eletkorHiba = document.getElementById('eletkorhiba');
        let atmero = parseInt((_c = document.getElementById('atmero')) === null || _c === void 0 ? void 0 : _c.value);
        let atmeroHiba = document.getElementById('atmerohiba');
        let viz = parseInt((_d = document.getElementById('viz')) === null || _d === void 0 ? void 0 : _d.value);
        let vizHiba = document.getElementById('vizhiba');
        if (!nevEll.test(nev) || nev.length < 2) {
            nameHiba.style.display = 'initial';
            x = 1;
        }
        else {
            nameHiba.style.display = 'none';
            x = 0;
        }
        if (eletkor < 1 || eletkor == null) {
            eletkorHiba.style.display = 'initial';
            x = 1;
        }
        else {
            eletkorHiba.style.display = 'none';
            x = 0;
        }
        if (atmero < 1500 || atmero == null) {
            atmeroHiba.style.display = 'initial';
            x = 1;
        }
        else {
            atmeroHiba.style.display = 'none';
            x = 0;
        }
        if (viz < 0 || viz > 100 || viz == null) {
            vizHiba.style.display = 'initial';
            x = 1;
        }
        else {
            vizHiba.style.display = 'none';
            x = 0;
        }
        if (x == 0) {
            bolygok.push(new planet_1.Planet(nev, eletkor, atmero, viz));
            let ossz = 1;
            for (let bolygo of bolygok) {
                ossz += 1;
            }
            darab.innerHTML = "Bolygok: " + ossz;
        }
    });
});
