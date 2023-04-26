import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../context/CartContextProvider';

//Icons 
import shop from '../assets/icons/shop.svg';

//Styles
import styles from './Navbar.module.css'
const Navbar = () => {

    const {state} = useContext(CartContext);
    return (
        <div className={styles.maincountainer}>
            <div className={styles.counteiner}>
                <Link className={styles.productLink} to="/products">Product</Link>
                <div className={styles.iconContainer}>
                     <Link to="/carts"><img className={styles.imgman} src={shop} alt="carts" /></Link>
                     <div className={styles.itemcounter}>
                        <span>{state.itemsCounter}</span>
                     </div>
                </div>
               
            </div>
        </div>
    );
};

export default Navbar;