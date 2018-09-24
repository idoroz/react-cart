import React, { Component } from 'react';
import SingleItem from './singleitem'
 class itemshelf extends Component {
	render() {

		return (
			<div className="theShelf">
						{this.props.shelf.map(counter => <SingleItem
				 key={counter.id} 
				 onAdd={this.props.onAdd}
				 onDelete={this.props.onDelete}
				 onIncrement={this.props.onIncrement} 
				 onDecrement={this.props.onDecrement}
				 value={counter.value}
				 id={counter.id}
				 item={counter.item}
				 price={counter.price}/>)}</div>
		);
	}
}

export default itemshelf