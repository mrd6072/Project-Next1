import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';


//Context

import {ProductsContext} from '../context/ProductsContextProvider'

//Styles
import styles from './ProductD.module.css'

const ProductDetails = (props) => {

    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image, title, description, price, category} = product;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p><span className={styles.category}>Category:</span> {category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link className={styles.buttonContainer} to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;