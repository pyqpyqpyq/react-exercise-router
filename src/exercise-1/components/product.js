import React, { Component } from 'react';
import '../styles/App.css';
import {Link}from 'react-router-dom';

 class product extends Component{
    render() {
        return <form className='productsform'>
            <label className='allProduct'>All Products</label>
            <p className="productInfo"><Link to='/products/1'>Bicycle</Link></p>
            <p className="productInfo"><Link to='/products/2'>Tv</Link></p>
            <p className="productInfo"><Link to='/products/3'>Pencil</Link></p>
        </form>             
    }
}
export default product;