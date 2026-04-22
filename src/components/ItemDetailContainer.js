import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore'; 
import { db } from '../services/firebaseConfig'; 
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const { itemId } = useParams(); 

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'products', itemId);


        getDoc(docRef)
            .then(response => {
                if (response.exists()) {
                    const data = response.data();
                    const productAdapted = { 
                        id: response.id, 
                        name: data.nombre, 
                        price: data.precio, 
                        category: data.categoria,
                        img: data.img,
                        stock: data.stock,
                        description: data.descripcion 
                    };
                    setProduct(productAdapted);
                } else {
                    console.error("El producto no existe en Firebase");
                }
            })
            .catch(error => {
                console.error("Error al obtener el detalle:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    return (
        <div style={{ padding: '20px', backgroundColor: '#FDFBF7', minHeight: '80vh' }}>
            {loading ? (
                <h2 style={{ textAlign: 'center', color: '#C5A059', marginTop: '50px' }}>
                    Cargando detalles de la fragancia...
                </h2>
            ) : product ? (
                <ItemDetail {...product} />
            ) : (
                <h2 style={{ textAlign: 'center' }}>Producto no encontrado</h2>
            )}
        </div>
    );
};

export default ItemDetailContainer;