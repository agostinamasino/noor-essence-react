const products = [
    { 
        id: '1', 
        name: 'Perfume Al Sultan', 
        price: 15000, 
        category: 'perfumes', 
        img: 'https://placehold.co/400x400?text=Perfume+Arabe', 
        stock: 10, 
        description: 'Fragancia intensa con notas de sándalo y especias.' 
    },
    { 
        id: '2', 
        name: 'Esencia de Lavanda', 
        price: 4500, 
        category: 'esencias', 
        img: 'https://placehold.co/400x400?text=Esencia', 
        stock: 25, 
        description: 'Relajante natural ideal para difusores.' 
    },
    { 
        id: '3', 
        name: 'Vela Vainilla Real', 
        price: 3200, 
        category: 'velas', 
        img: 'https://placehold.co/400x400?text=Vela+Vainilla', 
        stock: 15, 
        description: 'Vela de soja premium con aroma a vainilla de Madagascar.' 
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 250); 
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};