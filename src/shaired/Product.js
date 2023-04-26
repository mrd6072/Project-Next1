import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Functions
import { shorten, isInCart, quantityCount,  } from '../helper/function';

// Context
import { CartContext } from '../context/CartContextProvider';

//Icons
import trashIcon from "../assets/icons/trash.svg";


//Styles
import styles from './Products.module.css'
const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);
    console.log(state)
 
    return (
        
        <div className={styles.container}>
            
            <img className={styles.cardimage} src={productData.image} alt="product" style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.linkcontainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttoncontainer}>
                    {quantityCount(state , productData.id) > 1 && <button className={styles.smallbutton} onClick={() => dispatch({type:"DECREASE" , payload: productData})}>-</button>}
                    {quantityCount (state , productData.id) === 1 && <button className={styles.smallbutton} onClick={() => dispatch({type:"REMOVE_ITEM" , payload: productData})}><img style={{width: "20px" , textAlign: 'center'}} src={trashIcon} alt="product"/></button>}
                    {quantityCount(state , productData.id) > 0 && <span className={styles.counter}>{quantityCount(state , productData.id)}</span> }
                   {
                    isInCart (state , productData.id) ?
                    <button className={styles.smallbutton} onClick={() => dispatch({type:"INCREASE" , payload: productData})}>+</button>
                    :
                    <button onClick={() => dispatch({type:"ADD_ITEM" , payload: productData})}>Add to cart</button>
                   }
                    
                    
                </div>
            </div>
           
        </div>
    );
};

export default Product;