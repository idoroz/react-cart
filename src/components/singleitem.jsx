import React, { Component } from 'react';



 class singleitem extends Component {
	render() {

		// console.log('singleitem', this.props)
		return (
		 

  <div className="shelfItem" onClick = {() => this.props.onAdd(this.props)}>
    {this.props.item}
 {/*   <div className = 'itemDetails'></div>*/}
    {/*<img src="https://i.imgur.com/0hKPJOz.gif"	/>*/}
  </div>

   
		);
	}
}

export default singleitem