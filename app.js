//Variables
let numeroSecreto= 6;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10, por favor: ");

// Una buena práctica es poner las variables, la descripción junta

console.log(numeroUsuario);

/*Este bloque de código es una condición para comparar los números que dio el usuario y el número secreto que ya se encuentra almacenado en la variable numeroSecreto*/

if (numeroUsuario == numeroSecreto ) {
    alert("Acertaste en el número secreto")
    //Se cumple la condición

}else {
    alert("Lo sentimos, tu número no es correcto.")
    //No se cumple la condición
}


