import React, { useContext } from 'react';


//Component
import Product from '../shaired/Product';


//Context
import { ProductsContext } from '../context/ProductsContextProvider';

//Styles
import styles from './Store.module.css'
const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className={styles.container}>
            {
                products.map(product => <Product key={product.id} productData={product} />)
            }
            
        </div>
    );
};

export default Store;