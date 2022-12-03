import { Planet } from "./planet";
import { CelestialBody } from "./celestialbody";

document.addEventListener('DOMContentLoaded', () => {
    let bolygok : CelestialBody[];
    let x = 0;
    let darab = document.getElementById('darab') as HTMLParagraphElement;
    let atlag = document.getElementById('atlag') as HTMLParagraphElement;

    document.getElementById('gomb')?.addEventListener('click', () => {


    

    let nevEll = /^[a-zA-z" ",]+$/;
    let nev: string = (document.getElementById('nev') as HTMLInputElement)?.value ;
    let nameHiba = document.getElementById('namehiba') as HTMLElement;

    let eletkor: number =  parseInt((document.getElementById('eletkor') as HTMLInputElement)?.value) ;
    let eletkorHiba = document.getElementById('eletkorhiba') as HTMLElement;

    let atmero: number = parseInt((document.getElementById('atmero') as HTMLInputElement)?.value)  ;
    let atmeroHiba = document.getElementById('atmerohiba') as HTMLElement;

    let viz: number = parseInt((document.getElementById('viz') as HTMLInputElement)?.value) ;
    let vizHiba = document.getElementById('vizhiba') as HTMLElement;


    if (!nevEll.test(nev) || nev.length < 2)
    {
        nameHiba.style.display = 'initial';
        x = 1;
    }
    else
    {
        nameHiba.style.display = 'none';
        x = 0;
    }

    if (eletkor < 1 || eletkor == null)
    {
        eletkorHiba.style.display = 'initial';
        x = 1;
    }
    else
    {
        eletkorHiba.style.display = 'none';
        x = 0;
    }

    if (atmero < 1500 || atmero == null)
    {
        atmeroHiba.style.display = 'initial';
        x = 1;
    }
    else
    {
        atmeroHiba.style.display = 'none';
        x = 0;
    }

    if (viz < 0 || viz > 100 || viz == null)
    {
        vizHiba.style.display = 'initial';
        x = 1;
    }
    else
    {
        vizHiba.style.display = 'none';
        x = 0;
    }

    if (x == 0)
    {
        bolygok.push(new Planet(nev, eletkor, atmero, viz))

        let ossz = 1;

        for (let bolygo of bolygok)
        {
            ossz += 1;
        }

        darab.innerHTML = "Bolygok: " + ossz;
    }


    })
})