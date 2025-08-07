//Variables
let numeroSecreto= 6;
let numeroUsuario = 0; /*-> Aunque no se está utilizando aquí y se le va a pedir al usuario que dé el valor de esta variable, es necesario declararla y asignarle valor antes de pasarla como parámetro al bucle while.*/

while(numeroUsuario != numeroSecreto){

    let numeroUsuario = prompt("Me indicas un número entre 1 y 10, por favor: ");

    // Una buena práctica es poner las variables, la descripción junta

    console.log(numeroUsuario);

    /*Este bloque de código es una condición para comparar los números que dio el usuario y el número secreto que ya se encuentra almacenado en la varia5ble numeroSecreto*/

    if (numeroUsuario == numeroSecreto ) {
        alert(`Acertaste, el número secreto es: ${numeroSecreto}`)
        //Se cumple la condición

    }else {
        if(numeroUsuario > numeroSecreto)
        {
            alert("El número esperado es menor");
        }else{
            alert("El número esperado es mayor");
        }

        // alert("Lo sentimos, tu número no es correcto.")
        //No se cumple la condición
    }
}; 

