'use strict'

const aceleracion = 0.05;
const v = (v0, t) => v0 + (aceleracion * t * 60);


for (let minute =0; minute<=60 ;minute++){
    
    console.log(`en el minuto ${minute}  la velocidad es: ${v(0,minute)} m/s`);
}