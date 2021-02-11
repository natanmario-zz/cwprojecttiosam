export function addProduct(produto) {
    return {
        type: 'ADD_PRODUCT',
        produto
    }
}

export function deleteProduct(codigo){
    return {
        type: 'DELETE_PRODUCT',
        codigo,
    }
}

export function removeProduct(codigo) {
    return {
        type: 'REMOVE_PRODUCT',
        codigo,
    }
}