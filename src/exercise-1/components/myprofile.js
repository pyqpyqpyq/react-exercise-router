import React,{Component}from 'react';
import'../styles/App.css';

export default class myprofile extends Component{
    render(){
        return(
            <div className="myprofile"> 
                <p >UserName: PYQ</p>     
                <p>Gender:male</p>   
                <p>Work: IT Industry</p>     
                <p>Website:'/myProfile'</p>                            
            </div>           
        )
    }
}