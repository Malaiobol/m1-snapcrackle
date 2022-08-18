function snapCrackle(maxValue) {

    let listaNumerica = [];

    for (let i = 1; i <= maxValue; i++) {

        if (i % 2 === 1 && i % 5 === 0) {

           listaNumerica.push('SnapCrackle');

        }  else if ( i % 5 === 0) {

            listaNumerica.push('Crackle');

        }  else if ( i % 2 === 1) {

        listaNumerica.push('Snap');

        }  else {

            listaNumerica.push(i); 

        }
    }
    return listaNumerica;
}
console.log(snapCrackle(12));




