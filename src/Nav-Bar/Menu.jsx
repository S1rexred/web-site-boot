import React from 'react'
import { Appetizers } from '../Food/Appetizers';
import { Pizza } from '../Food/Pizza';
import { Deserts } from '../Food/Deserts';
import { Dreenks } from '../Food/Dreenks';
import Footer from '../Components/Footer';


export const Menu = () => (
    <>
    <Appetizers/>
    <Pizza/>
    <Deserts/>
    <Dreenks/>
    <Footer/>
    </>
);

export default Menu;