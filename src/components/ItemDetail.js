import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem, cart } = useContext(CartContext);


    const itemInCart = cart.find(prod => prod.id === id);
    const quantityInCart = itemInCart ? itemInCart.quantity : 0;

    const stockDisponible = stock - quantityInCart;

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, name, price, img };
        addItem(item, quantity);
    };

    return (
        <article style={styles.detailContainer}>
            <img src={img} alt={name} style={styles.image} />
            
            <section style={styles.info}>
                <h2 style={styles.title}>{name}</h2>
                <p style={styles.categoryText}>Categoría: {category}</p>
                <p style={styles.description}>{description}</p>
                <p style={styles.price}>${price}</p>
 
                <p style={{ 
                    color: stockDisponible === 0 ? '#e74c3c' : '#8D6E63', 
                    fontWeight: 'bold',
                    marginBottom: '20px' 
                }}>
                    {stockDisponible > 0 
                        ? `Stock disponible: ${stockDisponible}` 
                        : "Has agotado el stock disponible en tu carrito"}
                </p>

                {
                    quantityAdded > 0 ? (
                        <div style={styles.buttonContainer}>
                            <Link to='/cart' style={styles.finishButton}>
                                Terminar compra
                            </Link>
                            <Link to='/' style={styles.continueButton}>
                                Seguir comprando
                            </Link>
                        </div>
                    ) : (
                        stockDisponible > 0 ? (
                            <ItemCount initial={1} stock={stockDisponible} onAdd={handleOnAdd} />
                        ) : (
                            <Link to='/cart' style={styles.finishButton}>
                                Ver mi carrito
                            </Link>
                        )
                    )
                }
            </section>
        </article>
    );
};

const styles = {
    detailContainer: { 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '50px', 
        gap: '60px',
        backgroundColor: '#FDFBF7',
        flexWrap: 'wrap'
    },
    image: { 
        width: '450px', 
        maxHeight: '500px',
        objectFit: 'cover',
        borderRadius: '15px', 
        border: '1px solid #C5A059',
        boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
    },
    info: { 
        textAlign: 'left', 
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: { 
        color: '#5D4037', 
        fontSize: '3rem', 
        fontFamily: 'Montserrat',
        margin: 0 
    },
    categoryText: {
        color: '#C5A059',
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        letterSpacing: '2px',
        fontWeight: 'bold',
        marginTop: '10px'
    },
    description: { 
        margin: '25px 0', 
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#555' 
    },
    price: { 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        color: '#5D4037',
        margin: '10px 0 10px 0' 
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginTop: '10px'
    },
    finishButton: {
        display: 'block',
        backgroundColor: '#5D4037',
        color: 'white',
        padding: '15px 30px',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '1.1rem'
    },
    continueButton: {
        display: 'block',
        backgroundColor: '#C5A059',
        color: 'white',
        padding: '15px 30px',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '1.1rem'
    }
};

export default ItemDetail;