import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/firebase/firestore/products'; 

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); 

    useEffect(() => {
        setLoading(true);


        getProducts(categoryId)
            .then(products => {
                setProducts(products);
            })
            .catch(error => {
                console.error("Error al cargar productos:", error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]); 

    return (
        <main style={styles.container}>
            <h2 style={styles.greeting}>
                {categoryId ? `Categoría: ${categoryId}` : greeting}
            </h2>
            
            {loading ? (
                <div style={styles.loader}>
                    <p>Buscando las mejores fragancias...</p>
                </div>
            ) : (
                <ItemList products={products} />
            )}
        </main>
    );
};


const styles = {
    container: {
        padding: '40px 20px',
        textAlign: 'center',
        backgroundColor: '#FDFBF7',
        minHeight: '80vh'
    },
    greeting: {
        color: '#5D4037',
        fontFamily: 'Montserrat',
        fontSize: '2.5rem',
        marginBottom: '30px',
        textTransform: 'capitalize'
    },
    loader: {
        marginTop: '50px',
        color: '#C5A059',
        fontSize: '1.2rem',
        fontWeight: 'bold'
    }
};

export default ItemListContainer;