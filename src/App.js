import React, {Component} from 'react'
import "./components/reset.css"
import './App.css'
import NavBar from './components/NavBar'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      spinning: false
    }
    this.handleSpin = this.handleSpin.bind(this)
  }

  handleSpin (){
    console.log('hit handlespin')
    this.setState({
      spinning: !this.state.spinning
    })
  }

  render(){
    console.log(this.state.spinning)
    return(
      <div>
        <NavBar/>
        <div className={this.state.spinning ? 'spinning-square square' : 'square'}  onClick={this.handleSpin}></div>
        <div className='square-circle'></div>
        <div className='heart'></div>
      </div>
    )
  }
}