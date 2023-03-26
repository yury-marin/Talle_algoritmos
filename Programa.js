function calcular(base, altura){        
    //Let para variable de ambito local
    //Var para ambito global
    //Constante: Valor que una vez asignado nunca cambia 
     const area=base*altura;
     const perimetro=2*(base*altura);

     //Valores que retorna la funsion a quien la llama
     return [area, perimetro];
}

function calcular_hipotenusa(){
    //Math.pow(a,2)
    const hipotenusa= Math.sqrt(a**2+a**2);
    return hipotenusa;
}

function calculadora (a,b){

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

    let x = parseInt(document.getElementById('x').value);
    let y = parseInt(document.getElementById('y').value);
    let z = parseInt(document.getElementById('z').value);

    let promedio= (x+y+z)/3 
    console.log(promedio);
    return promedio;
}
