const addProduct = (catalog, product) => {
    if (!catalog.hasOwnProperty(product.id)){
        return {...catalog, [product.id]: product};
    }
    return catalog
}



// -----------

const removeProduct = (catalog, productId) => {
    const newCatalog = {}
    for (let key in catalog){
        if (key !== productId){
            newCatalog[key] = catalog[key]
        }
    }
    return newCatalog
}

// -----------------

const updateProduct = (catalog, productId, updates) => {
    const newCatalog = { ...catalog };
    if (newCatalog.hasOwnProperty(productId)) {
        newCatalog[productId] = { ...newCatalog[productId], ...updates };
    }
    return newCatalog
}


// --------------

const hasProduct = (catalog, productId) => {
    if (catalog.hasOwnProperty(productId)){
        return true 
    } else return false
}

