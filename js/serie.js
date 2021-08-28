function generarSecuencia(n){
    console.log('n',n);
    let contador = 0;
    let secuencia =  1.0;
    let aux = 1;

    let secuenciasList = [1];
    do{
        if(aux<=3){
            aux++;
            secuencia++
        }else{
            aux=1;
            secuencia--;
        }
        secuenciasList.push(secuencia);

        contador++;
    }while(contador<=n)

    return secuenciasList;
}

function obtenerPosicionSecuencia(n){
    console.log('n',n);
    let secuencia = generarSecuencia(n)
    console.log('secuencia',secuencia);
    console.log('resultado: ',secuencia[n]);
    return secuencia[n]
}

console.log('-----GENERAR 0--------')
console.log(obtenerPosicionSecuencia(0));

// console.log('------ GENERAR 5-------')
// console.log(obtenerPosicionSecuencia(5));

// console.log('--------GENERAR 545421 -----')
// console.log(obtenerPosicionSecuencia(545421));

console.log('--------GENERAR 4611686018327187 -----')
console.log(obtenerPosicionSecuencia(4611686018327187));

// console.log('--------GENERAR 81239812739128371 -----')
// console.log(obtenerPosicionSecuencia(81239812739128371));
