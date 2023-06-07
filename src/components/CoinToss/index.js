// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossResult: 'Heads',
    total: 0,
    heads: 0,
    tails: 0,
  }

  coinTossFunction = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        tossResult: 'Heads',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        tossResult: 'Tails',
      }))
    }
  }

  render() {
    const {tossResult, total, heads, tails} = this.state
    return (
      <div className="main-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {tossResult === 'Heads' ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="image"
            />
          )}
          <button
            type="button"
            onClick={this.coinTossFunction}
            className="button-toss"
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-text">Total: {total}</p>
            <p className="count-text">Heads: {heads}</p>
            <p className="count-text">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
