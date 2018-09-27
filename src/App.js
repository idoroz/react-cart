import React, { Component } from 'react';
import Counters from './components/counters';
import TotalBox from './components/totalBox';
import ItemShelf from './components/itemshelf';
import { Row, Col, Button, Table } from 'react-materialize'
import './App.css';

const getTotalAmount = (accumulator, currentValue) => accumulator + parseFloat(currentValue.price * currentValue.value);
const getTotalItems = (accumulator, currentValue) => accumulator + parseFloat(currentValue.value);

class App extends Component {
    state = {

        counters: [],

        shelf: [
            {
                id: 1,
                item: 'Pineapple',
                value: 1,
                price: '4.10'
            },

            {
                id: 2,
                item: 'Tin Foil',
                value: 1,
                price: '4.10'
            },
            {
                id: 3,
                item: 'Plastic Cups',
                value: 1,
                price: '5.25'
            },
            {
                id: 4,
                item: 'Chips',
                value: 1,
                price: '2.05'
            },
            {
                id: 5,
                item: 'Olive Oil',
                value: 1,
                price: '6.75'
            },
            {
                id: 6,
                item: 'Salt',
                value: 1,
                price: '0.50'
            },

            {
                id: 7,
                item: 'Tuna',
                value: 1,
                price: '6.75'
            },
            {
                id: 8,
                item: 'Potatoes',
                value: 1,
                price: '4.10'
            },
        ],
        totals: [
            {
                totalitems: 0,
                totalamount: 0,
            }
        ]
    }


    handleDelete = (item) => {
        let counterId = item.id
        const totals = [...this.state.totals];
        const counters = this.state.counters.filter(counter => counter.id !== counterId);

        totals.totalitems = counters.reduce(getTotalItems, 0)
        totals.totalamount = counters.reduce(getTotalAmount, 0).toFixed(2)


        this.setState({
            counters: counters,
            totals: totals,

        })
    }



    handleIncrement = (counter) => {
        console.log('to add')
        console.log(counter)
        let counters = [...this.state.counters]
        console.log('counters handle onIncrement', counters)
        let totals = [...this.state.totals];
        let currentCounter = counter.id;
        for (let i = 0; i < counters.length; i++) {
            if (counters[i].id === currentCounter) {
                counters[i].value++
            }
        }

        totals.totalitems = counters.reduce(getTotalItems, 0)
        totals.totalamount = counters.reduce(getTotalAmount, 0).toFixed(2)

        this.setState({
            counters: counters,
            totals: totals
        });
    }

    handleDecrement = (counter) => {

        let counters = [...this.state.counters]
        const totals = [...this.state.totals];
        const currentCounter = counter.id;
        for (let i = 0; i < counters.length; i++) {
            if (counters[i].id === currentCounter && counters[i].value > 0) {

                counters[i].value--
            }
            if (counters[i].value === 0) {
                counters = this.state.counters.filter(counter => counter.id !== currentCounter);
            }
        }

        totals.totalitems = counters.reduce(getTotalItems, 0)
        totals.totalamount = counters.reduce(getTotalAmount, 0).toFixed(2)

        this.setState({
            counters: counters,
            totals: totals
        });
    }

    handleReset = () => {

        const totals = [...this.state.totals];

        const cleanCounters = [];
        totals.totalitems = 0;
        totals.totalamount = '0.00'

        this.setState({
            counters: cleanCounters,
            totals: totals,
        });

    }

    handleAdd = (item) => {

        let shoppingList = [...this.state.counters];
        let totals = [...this.state.totals];
        let currentBasket = shoppingList.map(a => a.id);
        let itemId = item.id;
        // let shelf = this.state.shelf.filter(item => item.id !== itemId);
        console.log('toadd', item)
        console.log('shoppingList', shoppingList);
        console.log('currentBasket', currentBasket);


        if (currentBasket.indexOf(itemId) === -1) {
            shoppingList.push({
                id: item.id,
                item: item.item,
                value: item.value,
                price: item.price,
            })
        } else {

            let addToExisitingItem = shoppingList.find(x => x.id === itemId);
            addToExisitingItem.value = addToExisitingItem.value + 1
            // let restOfBasket = shoppingList.filter(x => x.id !== itemId);
            console.log(addToExisitingItem)
        }




        totals.totalitems = shoppingList.reduce(getTotalItems, 0)
        totals.totalamount = shoppingList.reduce(getTotalAmount, 0).toFixed(2)
        this.setState({
            counters: shoppingList,
            //shelf: shelf,
            totals: totals
        });

    }

    componentDidMount() {
        //this initializes totalBox values
        const totals = [...this.state.totals];
        const startTotal = '0.00'
        totals.totalitems = 0;
        totals.totalamount = startTotal
        this.setState({
            totals: totals
        });
    }
    render() {

        return (
            <React.Fragment>
        <Button className="grey" onClick={this.handleReset}>
  Reset
  </Button>


     <Row>
       <Col s={3} >
  <ItemShelf

            shelf={this.state.shelf}
            onAdd={this.handleAdd}>

   </ItemShelf></Col>
      <Col s={9} >
<Table>
  <thead>
    <tr>
      <th data-field="id">Name</th>
      <th data-field="name">Qty</th>
      <th data-field="price">Price</th>
      <th data-field="price">Amount</th>
       <th data-field="price">Remove</th>
    </tr>
  </thead>
            <TotalBox
            totals={this.state.totals}/>
  <tbody>

    <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}/>
   
  </tbody>
</Table>

    </Col>
     </Row>
 
    </React.Fragment>

        );
    }
}

export default App;
