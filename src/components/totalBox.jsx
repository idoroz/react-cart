import React, { Component } from 'react';
import { Row, Card, Col } from 'react-materialize'

class totalBox extends Component {
	
	render() {

		console.log(this.props.totals.totalitems)
		
if(this.props.totals.totalitems !== 0) {


		return (
	<tfoot>
	<tr className="subtotalRow">
    <td></td>
 	<td></td>
    <td>Subtotal</td>
     <td>{(this.props.totals.totalamount - ((17/100) * parseFloat(this.props.totals.totalamount))).toFixed(2)}</td>
     <td></td>
</tr>
	<tr className="vatRow">
    <td></td>
 	<td></td>
    <td>Vat 17%</td>
           
     <td>{((17/100) * parseFloat(this.props.totals.totalamount)).toFixed(2)}</td>
     <td></td>
</tr>
<tr className="totalsRow">
    <td></td>
 	<td></td>
    <td>Total</td>
           
     <td>{this.props.totals.totalamount}</td>
     <td></td>
</tr>
</tfoot>

		);
		}else{

			return (<tfoot></tfoot>);
		}
	}

	 // letsCheck = () => console.log(this.props.counters[0].value)
}


export default totalBox;