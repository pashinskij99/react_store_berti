import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";
import {AuthProvider} from "../../contexts/AuthContexts";
import { SignUp } from '../SignUp/SignUp';
import { UserProfile } from '../UserProfile/UserProfile';
import ProductPage from "../ProductPage/ProductPage";
import AddProduct from '../AddProduct/AddProduct';
import {NewProducts} from "../NewProducts/NewProducts";

const App = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/signin' element={ <SignIn /> } />
                <Route path='/signup' element={ <SignUp /> } />
                <Route path='/user_profile' element={ <UserProfile /> } />
                <Route path='/product/:id' element={ <ProductPage /> } />
                <Route path='/admin/add_product' element={ <AddProduct /> } />
                <Route path='/admin/new_products' element={ <NewProducts /> } />
            </Routes>
        </AuthProvider>
    );
};

export default App;
