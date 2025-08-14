//Variables
let numeroMaximoPosible= 100;
let numeroSecreto= Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0; /*-> Aunque no se está utilizando aquí y se le va a pedir al usuario que dé el valor de esta variable, es necesario declararla y asignarle valor antes de pasarla como parámetro al bucle while.*/
let intentos = 1;
// let palabraIntento ="intento";
let maxIntentos= 3;



// Console es para prueba
// console.log(`El número secreto es: ${numeroSecreto}`);


while(numeroUsuario != numeroSecreto){

    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}, por favor: `));

    // Una buena práctica es poner las variables, la descripción junta

    console.log(`El número que ingresaste es ${numeroUsuario} y su tipo de dato es: ${typeof(numeroUsuario)}`);
    //Este console log es para que me vaya indicando en consola los números que va ingresando el usuario. Cuando se le pone typeof(variable) es para sacar el tipo de dato de la variable, en este caso va a sacar el tipo de dato de lo que va a ingresar el usuario.  

    /*Este bloque de código es una condición para comparar los números que dio el usuario y el número secreto que ya se encuentra almacenado en la varia5ble numeroSecreto*/

    if (numeroUsuario == numeroSecreto ) {
        alert(`Acertaste, el número secreto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`);
        // si intentos es igual a 1 muestra vez, sino muestra veces


        //Se cumple la condición

    }else {
        if(numeroUsuario > numeroSecreto)
        {
            alert("El número esperado es menor");
        }else  //No se cumple la condición
            
            {
            alert("El número esperado es mayor");
        }

        //Contador directo. Está colocado en el bloque del else porque se implementa cuando la persona no acierta. 

        intentos++;
        //intentos += 1;
        //intentos = intentos + 1;
        // palabraIntento = "intentos";
        //Se vuelve a asignar el valor intentos en la variable palabraIntento pues la variable intentos ahora no es solamente igual a 1. Si la redefinimos aquí va a volverse a ejecutar el ciclo y palabraIntento será plural.

        if (intentos > maxIntentos) {
            alert(`Lo sentimos, llegaste al máximo de ${maxIntentos} intentos.`);
            break;
        };
       
       
    };
}; 

