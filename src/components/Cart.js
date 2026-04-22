import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, removeItem, total } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '100px', backgroundColor: '#FDFBF7', minHeight: '80vh' }}>
                <h1 style={{ color: '#5D4037', fontFamily: 'Montserrat' }}>El carrito está vacío</h1>
                <Link to='/' style={styles.continueButton}>
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '50px', backgroundColor: '#FDFBF7', minHeight: '80vh' }}>
            <h2 style={styles.title}>Tu Carrito</h2>
            
            {cart.map(p => (
                <div key={p.id} style={styles.itemRow}>
                    <div style={{ flex: 2 }}>
                        <h3 style={{ color: '#5D4037', margin: 0 }}>{p.name}</h3>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <p>Cantidad: {p.quantity}</p>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <p>${p.price} c/u</p>
                    </div>
                    <div style={{ flex: 1, textAlign: 'right' }}>
                        <p style={{ fontWeight: 'bold' }}>Subtotal: ${p.price * p.quantity}</p>
                    </div>
                    <button onClick={() => removeItem(p.id)} style={styles.deleteButton}>Eliminar</button>
                </div>
            ))}

            <div style={styles.totalContainer}>
                {/* Aquí total NO lleva paréntesis porque ya es un número */}
                <h3>Total de la compra: ${total}</h3>
            </div>

            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button onClick={() => clearCart()} style={styles.clearButton}>Vaciar Carrito</button>
                <Link to='/checkout' style={styles.finishButton}>Finalizar Compra</Link>
            </div>
        </div>
    );
};

const styles = {
    title: { color: '#5D4037', fontFamily: 'Montserrat', fontWeight: '700', marginBottom: '30px' },
    itemRow: { 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid #C5A059', 
        padding: '15px 0' 
    },
    totalContainer: {
        marginTop: '40px',
        textAlign: 'right',
        fontSize: '1.5rem',
        color: '#5D4037',
        borderTop: '2px solid #5D4037',
        paddingTop: '20px'
    },
    deleteButton: { backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '5px', marginLeft: '20px' },
    clearButton: { backgroundColor: '#8D6E63', color: 'white', border: 'none', padding: '12px 25px', cursor: 'pointer', borderRadius: '8px', fontWeight: 'bold' },
    finishButton: { backgroundColor: '#C5A059', color: 'white', padding: '12px 25px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '8px' },
    continueButton: { backgroundColor: '#5D4037', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '20px' }
};

export default Cart;