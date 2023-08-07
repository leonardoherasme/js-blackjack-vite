
/**
 * 
 * @param {Array<String>} carta es un string
 * @returns {String} retorna el valor de las cartas
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}