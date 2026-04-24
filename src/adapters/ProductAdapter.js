export const createAdapterProductFromFirestore = (doc) => {
    const data = doc.data()

    return {
        id: doc.id,
        name: data.nombre,
        category: data.categoria,
        img: data.img,
        price: data.precio,
        stock: data.stock,
        description: data.descripcion
    }
}