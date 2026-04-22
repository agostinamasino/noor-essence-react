import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    total: 0,
    totalQuantity: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {

            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
 
            const updatedCart = cart.map(prod => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                }
                return prod;
            });
            setCart(updatedCart);
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };


    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addItem, 
            removeItem, 
            clearCart, 
            total, 
            totalQuantity 
        }}>
            {children}
        </CartContext.Provider>
    );
};