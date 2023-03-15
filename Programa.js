function calcular(base, altura){
 
    //let para variable de ambito local
    //var para ambito global

//Constante: Valor que una vez asignado nunca cambia
const area=base*altura;
const perimetro=2*(base+altura);

//valores que retorna la funcion a quien la llama
return[area, perimetro];
}

function calcular_hipotenusa(a, b){

    //Math.pow(a,2)
    const hipotenusa= Math.sqrt(a**2+a**2);
    return hipotenusa;

}


let resultado= calcular_hipotenusa(10, 20);






