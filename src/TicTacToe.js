import React from 'react';
import ReactDOM from 'react-dom'

class TicTacToe extends Component {
  constructor(props){
    super(props)
    const{ match } = props

    this.state={
      ticTacToeId: match.params.id
    }
  }

componentDidUpdate(prevProps){
  const prevMatch = prevProps.match
  const{ match } = this.props
  if(match.params.id != prevMatch.params.id){
    this.setState({ticTacToeId:  match.params.id})
  }
}

  render() {

    return(
      <div>
        TicTacToe
      </div>
    )
  }
}

export default TicTacToe
