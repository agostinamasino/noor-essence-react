import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/firebase/firestore/products'; 
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const { itemId } = useParams(); 

    useEffect(() => {
        setLoading(true);

        getProductById(itemId)
            .then(product => {
                setProduct(product);
            })
            .catch(error => {
                console.error("Error al obtener el detalle:", error);
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [itemId]);

    return (
        <div style={styles.container}>
            {loading ? (
                <h2 style={styles.loader}>
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

const styles = {
    container: { 
        padding: '20px', 
        backgroundColor: '#FDFBF7', 
        minHeight: '80vh' 
    },
    loader: { 
        textAlign: 'center', 
        color: '#C5A059', 
        marginTop: '50px' 
    }
};

export default ItemDetailContainer;