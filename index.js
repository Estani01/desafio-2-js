/* EJEMPLO 1 */


    const suma = (a,b) => a + b;
    const resta = (a,b) => a - b;
    const iva = x => x * 0.21; 
   

    let televisor= 8000;
    let descuento = 3000;

    let resultado = resta(suma(televisor,iva(televisor)),descuento)
    console.log(resultado);

/* EJEMPLO 2 */


    
    const multiplicacion = (a,b) => {return a * b};
    const impuesto = x => {return x*0.55}

    let alumnos= 25;
    let cuotas= 16000;

    let resultado1= multiplicacion(resta(cuotas, impuesto(cuotas)), alumnos)

    console.log(resultado1);
