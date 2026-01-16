

const getProduct = (catalog, productId) => {
    if (catalog.hasOwnProperty(productId)){
        return {...catalog[productId] }
    }
    return null
}
// ----------------
const listProduct = (catalog) => {
    const productArray = []
    for (let key in catalog){
        const productCopy = {... catalog[key]}
        productArray.push(productCopy)
    }
    return productArray
    }
// --------------------
const filterByCategory = (catalog, categoryName) => {
    const result = [];
    
    for (let key in catalog){
        const product = catalog[key]

        if (product.category && product.caterogy.main === categoryName){
        result.push(product)
    }
    }

    

    return result
}

const catalog = {
  p1001: { id: 'p1001', name: 'Laptop', price: 150000, category: { main: 'Electronics' } },
  p2002: { id: 'p2002', name: 'Phone', price: 80000, category: { main: 'Electronics' } },
  p3003: { id: 'p3003', name: 'Chair', price: 10000, category: { main: 'Furniture' } },
};

console.log(filterByCategory(catalog, 'Electronics'));

