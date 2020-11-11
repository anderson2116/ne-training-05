`use strict`

const distance = 300;
const v0 = 380;

const v = (v0 , t) => v0 * t;
const d = (v0, vf , t) => ((v0 + vf) / 2) * t ;

let s = 0 ;
let recorrido = 0;
let diferencia = 0;

while(recorrido < distance  ){
    
const velocidad = v(v0, s);
recorrido = d(v0 ,distance,s);

diferencia = distance - recorrido;



console.log(`al segundo ${s.toFixed(1)} la distancia recorrida es de  ${recorrido.toFixed(2)} la distancia entre la bala y el blanco es de ${diferencia.toFixed(2)}`);

s+=0.1;
}