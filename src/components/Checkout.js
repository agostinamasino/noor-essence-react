import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [orderId, setOrderId] = useState('');
    const { clearCart } = useContext(CartContext); 
    const handleFinalizar = () => {   
     const tempId = "ABC123XYZ"; 
        setOrderId(tempId);
        clearCart(); 
    };

    if (orderId) {
        return (
            <div style={{ textAlign: 'center', padding: '100px', backgroundColor: '#FDFBF7', minHeight: '80vh' }}>
                <h1 style={{ color: '#5D4037', fontFamily: 'Montserrat' }}>¡Gracias por tu compra!</h1>
                <p style={{ fontSize: '1.2rem', color: '#8D6E63' }}>Tu número de orden es: <strong>{orderId}</strong></p>
                <Link to='/' style={styles.button}>Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '100px', textAlign: 'center', backgroundColor: '#FDFBF7', minHeight: '80vh' }}>
            <h1 style={{ color: '#5D4037', fontFamily: 'Montserrat' }}>Finalizar Compra</h1>
            <p>¿Estás listo para recibir tus fragancias?</p>
            
            <button onClick={handleFinalizar} style={styles.button}>
                Confirmar y Pagar
            </button>
        </div>
    );
};

const styles = {
    button: {
        backgroundColor: '#C5A059',
        color: 'white',
        border: 'none',
        padding: '15px 30px',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '1.1rem',
        textDecoration: 'none',
        display: 'inline-block',
        marginTop: '20px'
    }
};

export default Checkout;