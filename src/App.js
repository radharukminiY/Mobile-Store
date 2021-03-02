import React ,{Fragment}from 'react';
import {Switch,Route,} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/home';
import ProductList from './components/productlist';
import Details from './components/details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/model';

function App() {
  return(
    <Fragment>
    <Navbar />
    <Switch>
    <Route exact path ="/" component ={ProductList}></Route>
    <Route exact path ="/details" component ={Details}></Route>
    <Route exact path ="/cart" component ={Cart}></Route>
    <Route exact component ={Default}></Route>
    </Switch>
    <Modal/>
    </Fragment>
  );
}
export default App;
