const products = [
    {
        id: '1',
        name: 'Notebook Lenovo',
        price: 1000,
        category: 'notebook',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_745797-MLA69340654813_052023-F.webp',
        stock: 25,
        description: 'Descripcion de Notebook lenovo'
    },
    {id: '2', name: 'Teclado Redragon', price: '200', category: 'teclado', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_811151-MLA52350593586_112022-F.webp', stock: '10', description: 'Descripcion de Teclado Redragon'},
    {id: '3', name: 'Auriculares Logitech', price: '450', category: 'auricular', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_719382-MLA47921864533_102021-F.webp', stock: '15', description: 'Descripcion de Auriculares'},
]

export const getProducts =  () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
