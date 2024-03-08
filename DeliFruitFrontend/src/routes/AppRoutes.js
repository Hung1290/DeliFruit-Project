import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Login from '../components/login/login';
import Register from '../components/register/register';
import Home from '../components/home/home'
import FruitBasket from '../components/FruitBasket/FruitBasket'
import ImportedFruit from '../components/ImportedFruit/ImportedFruit'
import PrivateRoutes from './PrivateRoutes';
import Admin from '../components/admin/admin';
import DetailItem from '../components/detailItem/detailItem';
import CartPage from '../components/cart/cartPage';

const AppRoutes = (props) => {

    return (
        <>
            <Switch>
                <PrivateRoutes path='/admin' component={Admin} />

                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/fruit">
                    <ImportedFruit />
                </Route>
                <Route path="/fruit-basket">
                    <FruitBasket />
                </Route>
                <Route path="/detail-item/:id">
                    <DetailItem />
                </Route>
                <Route path="/cart">
                    <CartPage />
                </Route>
                <Route path="*">
                    404 not found
                </Route>
            </Switch>
        </>
    )
}

export default AppRoutes