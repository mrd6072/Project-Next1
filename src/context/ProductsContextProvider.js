import React,{ useState, useEffect , createContext  } from 'react';


//API 

import {getProducts} from '../services/Api';

export const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {

    const [product ,setProduct] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
        setProduct(await getProducts());
    }

    fetchAPI();

    }, []);

    

    return (
        
        <ProductsContext.Provider value={product}>
        {children}
    </ProductsContext.Provider>
        
    );
};

export default ProductContextProvider;