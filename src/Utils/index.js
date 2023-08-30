/**
 * Esta función calcula el precio total de una orden en el carrito de compras
 * @param {Array} products cartProduct: Es un array de objetos
 * @returns  {number} Total de los productos en el carrito de compras
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price);
    return sum * 4000
}