'use strict'

const g = 9.8665;
const v0 = 380;

const v = (v0, t) => v0 - g * t;
const h = (h0 , t) => (v0 * t) - (g * (t*t) / 2 );  


 

for(let s = 0; s <= 60 ; s++){

    console.log(`en el segundo ${s.toFixed(2)} tiene una velocidad de ${v(v0,s).toFixed(2)} su altura  ${h(0 , s ).toFixed(2)}`);

    s-=0.9;
    
}