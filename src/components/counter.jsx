import React, { Component } from 'react';
import { Button, Collection, CollectionItem, Col, Row, Chip } from 'react-materialize'

class Counter extends Component {


    render() {
    	
        return (


<tr>
    <td>{this.props.item}</td>
 	<td>
        	<a className="btn-floating grey" onClick = {() => this.props.onDecrement(this.props)}><i className="material-icons">remove</i></a>
        	<a className="btn-floating grey center-align" >{this.props.value}</a>
        	<a className="btn-floating grey" onClick = {() => this.props.onIncrement(this.props)}><i className="material-icons">add</i></a>
 	</td>
    <td>{this.props.price}</td>
         <td>{parseFloat(this.props.price * this.props.value).toFixed(2)}</td>   
        <td><a className="btn-floating red" onClick = {() => this.props.onDelete(this.props)}><i className="material-icons">delete</i></a></td>  
</tr>
         


        
   

 

         )
    }


}

export default Counter;

