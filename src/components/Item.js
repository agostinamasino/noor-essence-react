import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Item = ({ id, name, img, price, stock }) => {
    const { cart } = useContext(CartContext);


    const itemInCart = cart.find(prod => prod.id === id);
    const quantityInCart = itemInCart ? itemInCart.quantity : 0;

    const stockDisponible = stock - quantityInCart;
    const hasStock = stockDisponible > 0;

    return (
        <article style={{
            ...styles.card, 
            opacity: hasStock ? 1 : 0.8,
            filter: hasStock ? 'none' : 'grayscale(0.3)'
        }}>
   
            {!hasStock && (
                <div style={styles.stockBadge}>
                    {stock === 0 ? 'AGOTADO' : 'EN TU CARRITO'}
                </div>
            )}
            
            <img src={img} alt={name} style={styles.img} />
            
            <section style={styles.info}>
                <h4 style={styles.title}>{name}</h4>
                <p style={styles.price}>${price}</p>
                
                <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                    <button 
                        style={{
                            ...styles.button, 
                            backgroundColor: hasStock ? '#C5A059' : '#8D6E63',
                            cursor: 'pointer'
                        }}
                    >
                        {hasStock ? 'Ver detalle' : 'Revisar producto'}
                    </button>
                </Link>
            </section>
        </article>
    );
};

const styles = {
    card: {
        width: '250px',
        padding: '20px',
        margin: '15px',
        backgroundColor: '#fff',
        border: '1px solid #C5A059',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease'
    },
    stockBadge: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#5D4037', 
        color: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '0.65rem',
        fontWeight: 'bold',
        zIndex: 1,
        letterSpacing: '1px'
    },
    img: { 
        width: '100%', 
        height: '200px', 
        objectFit: 'contain', 
        borderRadius: '4px',
        marginBottom: '15px'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
    },
    title: { 
        color: '#5D4037', 
        margin: '0', 
        fontFamily: 'Montserrat',
        fontSize: '1.1rem',
        minHeight: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    price: { 
        fontWeight: 'bold', 
        color: '#8D6E63', 
        fontSize: '1.3rem',
        margin: '10px 0'
    },
    button: {
        color: 'white',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '5px',
        width: '100%',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        transition: '0.3s'
    }
};

export default Item;