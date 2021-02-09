import React, { Component } from 'react'
import { render } from 'react-dom'

class Exchange extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: []
    }
  }
  componentDidMount () {
    fetch('https://ja.wikipedia.org/w/api.php?&origin=*') //api
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          isLoaded: true,
          items: json.ミク
        })
      })
  }

  render () {
    var { items, isLoaded, image } = this.state
    console.log(items)
    if (!isLoaded) {
      return <div>...Loading</div>
    } else {
      return (
        <div>
          <p>{items}</p>
        </div>
      )
    }
  }
}

export default Exchange

render(<Exchange />, document.getElementById('root'))
