import React,{useContext} from 'react';
import { Link } from 'react-router-dom';


//Context
import { CartContext } from '../context/CartContextProvider';


//Component

import Cart from './Cart';

//Styles
import styles from './ShopCart.module.css'

const ShopCart = () => {

    const {state , dispatch} = useContext(CartContext);
    
    return (
        <div className={styles.container}>
            <div className={styles.cardcontainer}>
            {state.selecteditems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
            {
            state.selecteditems > 0 ?   <p></p>:<div className={styles.payments}>
               <p><span>Total items:</span> {state.itemsCounter}</p>
               <p><span>Total payments:</span> {state.total}</p>
               
               <div className={styles.buttoncontainer}>
                   <button className={styles.checkout} onClick={() => dispatch({type: "CHECKOUT"})}>Check out</button>
                   <button className={styles.clear} onClick={() => dispatch({type: "CLEAR"})}>Claer</button>
               </div>
           </div>
                
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checked out Succesfuly</h3>
                    <Link to="/products">by more</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>Whant to by?</h3>
                    <Link to="/products">Go back shop</Link>
                </div>
            }
            
        </div>
    );
}; 

export default ShopCart;