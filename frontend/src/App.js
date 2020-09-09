import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ],
      newName: ""
    }
  }

  handleNameChage = event => {
    this.setState({
      newName: event.target.value
    })
  }

  addRestaurant = () => {
    const newId = Math.max(...this.state.restaurants.map(res => res.id))+1
    const newRestaurant = {
      id: newId,
      name: this.state.newName,
      rating: 0
    }
    this.setState((state) => ({restaurants: [...state.restaurants, newRestaurant]}))
  }

  render() {
    return (
      <div className="App">
        <Counter count={0} />
        <Instructions complete={true} />
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
        <input type="text" placeholder="Restaurant Name" value={this.state.newName} onChange={this.handleNameChage}/>
        <button onClick={this.addRestaurant}>Add</button>
      </div>
    )
  }
}

export default App
