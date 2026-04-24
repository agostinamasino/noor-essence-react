import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; 
import { createAdapterProductFromFirestore } from '../../../adapters/ProductAdapter';


export const getProducts = (categoryId) => {
    const collectionRef = categoryId 
        ? query(collection(db, 'products'), where('categoria', '==', categoryId))
        : collection(db, 'products');

    return getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                return createAdapterProductFromFirestore(doc);
            });
            return productsAdapted;
        })
        .catch(error => {
            return error;
        });
};


export const getProductById = (productId) => {
    const docRef = doc(db, 'products', productId);

    return getDoc(docRef)
        .then(response => {
            return createAdapterProductFromFirestore(response);
        })
        .catch(error => {
            return error;
        });
};