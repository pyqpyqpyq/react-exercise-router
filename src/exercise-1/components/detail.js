import React,{Component} from 'react';
import'../styles/App.css';
import data from '../../exercise-2/mockups/data.json';

class detail extends Component{
    state={
        info:{}
    }
    componentDidMount(){
        for(var i in data){
            console.log("data[i].id",data[i].id)
            console.log(this.props)
            if(data[i].id==this.props.match.params.id){
                this.setState({
                    info:data[i]
                })
                break;
            }
        }
    }
    render(){
        return(
            <div className="productdetails">
                <p className='detailTitle'>Product Details:</p>
                <p>Name:{this.state.info.name}</p>
                <p>Id:{this.state.info.id}</p>
                <p>Price:{this.state.info.price}</p>
                <p>Quantity:{this.state.info.quantity}</p>
                <p>Desc:{this.state.info.desc}</p>
                <p>URL:/products/{this.state.info.id}</p>
            </div>
        )
    }
}
export default detail;