import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { db } from '../services/firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Checkout = () => {
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);
    const { cart, total, clearCart } = useContext(CartContext); 

    const handleFinalizar = async () => {   
        if (cart.length === 0) return; 

        setLoading(true);

        try {
            const order = {
                buyer: {
                    name: "Agostina Test", 
                    phone: "1122334455",
                    email: "ago@test.com"
                },
                items: cart,
                total: total,
                date: serverTimestamp() 
            };

            const ordersRef = collection(db, "orders");

            const doc = await addDoc(ordersRef, order);
            
            setOrderId(doc.id);

            clearCart(); 

        } catch (error) {
            console.error("Error al generar la orden: ", error);
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <div style={{ textAlign: 'center', padding: '100px', backgroundColor: '#FDFBF7', minHeight: '80vh' }}>
                <h1 style={{ color: '#5D4037', fontFamily: 'Montserrat' }}>¡Gracias por tu compra!</h1>
                <p style={{ fontSize: '1.2rem', color: '#8D6E63' }}>Tu número de orden es: <strong>{orderId}</strong></p>
                <p>Guardá este código como comprobante de tu pedido.</p>
                <Link to='/' style={styles.button}>Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '100px', textAlign: 'center', backgroundColor: '#FDFBF7', minHeight: '80vh' }}>
            <h1 style={{ color: '#5D4037', fontFamily: 'Montserrat' }}>Finalizar Compra</h1>
            {loading ? (
                <p>Procesando tu pedido, por favor esperá...</p>
            ) : (
                <>
                    <p>¿Estás listo para recibir tus fragancias?</p>
                    <button onClick={handleFinalizar} style={styles.button}>
                        Confirmar y Pagar
                    </button>
                </>
            )}
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