import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div style={styles.counter}>
            <div style={styles.controls}>
                <button style={styles.button} onClick={decrement}>-</button>
                <h4 style={styles.number}>{quantity}</h4>
                <button style={styles.button} onClick={increment}>+</button>
            </div>
            <button 
                style={styles.addCart} 
                onClick={() => onAdd(quantity)}
                disabled={!stock}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

const styles = {
    counter: { display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0' },
    controls: { display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '20px' },
    button: { 
        backgroundColor: '#5D4037', 
        color: 'white', 
        border: 'none', 
        width: '35px', 
        height: '35px', 
        borderRadius: '50%', 
        cursor: 'pointer',
        fontSize: '1.2rem'
    },
    number: { fontSize: '1.5rem', margin: 0, color: '#5D4037' },
    addCart: { 
        backgroundColor: '#C5A059', 
        color: 'white', 
        border: 'none', 
        padding: '10px 20px', 
        borderRadius: '5px', 
        cursor: 'pointer',
        fontWeight: 'bold',
        width: '100%'
    }
};

export default ItemCount;