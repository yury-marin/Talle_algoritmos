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
const hipotenusa= Math.sqrt(a**2+b**2);
return hipotenusa;
}

function calculadora(a,b){

    document.writeln(a+b);
    document.writeln(a-b);
    document.writeln(a*b);
    document.writeln(a/b);

    console.log(a+b);
    console.warn(a-b);
    console.error(a*b);
    console.info(a/b);



}

function media(){         
    
   let campo_x = document.getElementById('x');
   let campo_y = document.getElementById('y');
   let campo_z = document.getElementById('z');
   console.log(campo_x.value + campo_y.value + campo_z.value )

}

