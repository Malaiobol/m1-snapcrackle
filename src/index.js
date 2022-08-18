function snapCrackle(maxValue) {

    let listaNumerica = '';

    for (let i = 1; i <= maxValue; i++) {

        if (i % 2 === 1 && i % 5 === 0) {

          listaNumerica += ("SnapCrackle, ");

        }  else if ( i % 5 === 0) {

            listaNumerica += ("Crackle, ");

        }  else if ( i % 2 === 1) {

        listaNumerica += ("Snap, ");

        }  else {

            listaNumerica += (i + ", "); 

        }
    }
    return listaNumerica;
}
console.log (snapCrackle(12));



