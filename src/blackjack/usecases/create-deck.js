import _ from 'underscore';

/**
 * Esta Funcion crea un deck
 * @param {Array<String>} tiposDeCarta 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} regresa nuestro arreglo de cartas
 */

// Esta función crea un nuevo deck
 export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta === 0 ) throw new Error('TiposDeCarta es obligatorio');
    if (!tiposEspeciales || tiposEspeciales === 0 ) throw new Error('tiposEspeciales es obligatorio');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}