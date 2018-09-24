import React, { Component } from 'react';
import { Collection, CollectionItem } from 'react-materialize'

 class singleitem extends Component {
	render() {

		// console.log('singleitem', this.props)
		return (
		 
<Collection >
  <CollectionItem className="shelfItem" onClick = {() => this.props.onAdd(this.props)}>
    {this.props.item}
  </CollectionItem>
  </Collection>
   
		);
	}
}

export default singleitem