import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; 

const NavBar = () => {
    const { cart } = useContext(CartContext); 
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav style={styles.nav}>
            <Link to="/" style={styles.brandContainer}>
                <img 
                    src="/imagenes/logo.jpg" 
                    alt="Logo Noor Essence" 
                    style={styles.logoImg} 
                />
                <h1 style={styles.logoText}>NOOR ESSENCE</h1>
            </Link>
            
            <ul style={styles.links}>
                <NavLink to="/category/perfumes" style={styles.item}>Perfumes</NavLink>
                <NavLink to="/category/esencias" style={styles.item}>Esencias</NavLink>
                <NavLink to="/category/velas" style={styles.item}>Velas</NavLink>       
            </ul>

            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={styles.cart}>
                    <span>👜</span>
                    <span style={styles.badge}>{totalQuantity}</span>
                </div>
            </Link>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#221a0a', 
        borderBottom: '1px solid #2b1e06', 
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none'
    },
    logoImg: {
        width: '35px', 
        height: '35px',
    },
    logoText: {
        color: '#d2a446', 
        fontSize: '1.2rem',
        margin: 0,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    links: {
        display: 'flex',
        listStyle: 'none',
        gap: '20px',
        margin: 0,
        padding: 0
    },
    item: {
        color: '#d2a446', 
        textDecoration: 'none',
        fontWeight: '500',
        cursor: 'pointer'
    },
    cart: {
        fontSize: '1.5rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
    },
    badge: {
        fontSize: '0.8rem',
        backgroundColor: '#C5A059',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 7px',
        marginLeft: '5px',
        fontWeight: 'bold'
    }
};

export default NavBar;