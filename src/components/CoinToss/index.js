// Write your code here
import {Component} from 'react'
import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    tossImage: headsImage,
  }

  onClickTossBtn = () => {
    const getRandomNum = Math.floor(Math.random() * 2)
    if (getRandomNum === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        tossImage: headsImage,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        tossImage: tailsImage,
      }))
    }
  }

  render() {
    const {headsCount, tailsCount, tossImage} = this.state
    const total = headsCount + tailsCount
    return (
      <div className="background">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img src={tossImage} className="toss-img" alt="toss result" />
          <button
            className="toss-btn"
            type="button"
            onClick={this.onClickTossBtn}
          >
            Toss Coin
          </button>
          <div className="values-container">
            <p className="total">Total: {total}</p>
            <p className="heads">Heads: {headsCount}</p>
            <p className="tails">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
