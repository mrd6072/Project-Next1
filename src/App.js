import{ Switch , Route  , Redirect} from 'react-router-dom';
import './App.css';


//Components
import Store from './components/Store';
// import Navbar from './components/Navbar';
// import ShopCart from './components/ShopCart';
import ProductDetalis from './components/ProductDetalis';
//Context
import CartContextProvider from './context/CartContextProvider';
import ProductContextProvider from './context/ProductsContextProvider';
function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        {/* <Navbar /> */}
      <Switch>
        <Route path="/products/:id" component={ProductDetalis}/>
        <Route path="/products" component={Store}/>
        {/* <Route path="/carts" component={ShopCart}/> */}
        <Redirect to="/products"/>
      </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;

