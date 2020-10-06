import React,{Component}from 'react';
import {Link}from 'react-router-dom';
import'../styles/App.css';

export default class aboutus extends Component{
    render(){
        return(
            <div className='aboutUs'>
                <p>Company: Thoughtworks Local</p>     
                <p>Location: Xian</p>  
                <p className='secondp'>For more information, please</p>     
                <p>view our <label className="website"><Link to='/'>website</Link></label></p>                                      
            </div>
        )
    }
}