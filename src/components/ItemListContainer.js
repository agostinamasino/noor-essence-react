import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'; 
import { db } from '../services/firebaseConfig'; 

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); 

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('categoria', '==', categoryId))
            : collection(db, 'products');

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();
                    return { 
                        id: doc.id, 
                        name: data.nombre,
                        price: data.precio,
                        category: data.categoria, 
                        img: data.img,
                        stock: data.stock,
                        description: data.descripcion
                    };
                });
                setProducts(productsAdapted);
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