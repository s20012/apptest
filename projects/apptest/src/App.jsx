import React, { Component } from 'react'
import { render } from 'react-dom'
import './App.css'

class Exchange extends Component {
  constructor (props) {
    super(props)
    this.state = {
      //state初期化
      doo: [],
      fo: [],
      ca: []
    }
    this.shakeDice = this.shakeDice.bind(this)
    this.shakeDice1 = this.shakeDice1.bind(this)
    this.shakeDice2 = this.shakeDice2.bind(this)
  }
  shakeDice () {
    this.setState({ num: Math.floor(Math.random() * 3) + 1 })
    if (this.state.num === 1) {
      fetch('https://randomfox.ca/floof/')
        .then(res1 => {
          return res1.json()
        })
        .then(json => {
          console.log(json.image)
          this.setState({ doo: json.image })
        })
    } else if (this.state.num === 2) {
      fetch('https://dog.ceo/api/breeds/image/random') //api
        .then(res => {
          return res.json()
        })
        .then(json => {
          console.log(json.message)
          this.setState({ doo: json.message })
        })
    } else {
      fetch('https://aws.random.cat/meow')
        .then(res2 => {
          return res2.json()
        })
        .then(json => {
          console.log(json.file)
          this.setState({ doo: json.file })
        })
    }
  }

  shakeDice1 () {
    this.setState({ num: Math.floor(Math.random() * 3) + 1 })
    if (this.state.num === 1) {
      fetch('https://randomfox.ca/floof/')
        .then(res1 => {
          return res1.json()
        })
        .then(json => {
          console.log(json.image)
          this.setState({ fo: json.image })
        })
    } else if (this.state.num === 2) {
      fetch('https://dog.ceo/api/breeds/image/random') //api
        .then(res => {
          return res.json()
        })
        .then(json => {
          console.log(json.message)
          this.setState({ fo: json.message })
        })
    } else {
      fetch('https://aws.random.cat/meow')
        .then(res2 => {
          return res2.json()
        })
        .then(json => {
          console.log(json.file)
          this.setState({ fo: json.file })
        })
    }
  }

  shakeDice2 () {
    this.setState({ num: Math.floor(Math.random() * 3) + 1 })
    if (this.state.num === 1) {
      fetch('https://randomfox.ca/floof/')
        .then(res1 => {
          return res1.json()
        })
        .then(json => {
          console.log(json.image)
          this.setState({ ca: json.image })
        })
    } else if (this.state.num === 2) {
      fetch('https://dog.ceo/api/breeds/image/random') //api
        .then(res => {
          return res.json()
        })
        .then(json => {
          console.log(json.message)
          this.setState({ ca: json.message })
        })
    } else {
      fetch('https://aws.random.cat/meow')
        .then(res2 => {
          return res2.json()
        })
        .then(json => {
          console.log(json.file)
          this.setState({ ca: json.file })
        })
    }
  }

  reload () {
    document.location.reload()
  }

  render () {
    var { doo, fo, ca } = this.state
    return (
      <div>
        <h2>
          <i class='far fa-lightbulb'></i>
          <span>スロットゲーム！</span>
        </h2>
        <p class='box19'>それぞれ、狐、猫、犬で揃えられたら勝ちです！</p>
        <img src={this.state.doo} />
        <img src={this.state.fo} />
        <img src={this.state.ca} />
        <br />
        <a onClick={this.shakeDice} class='btn-square-shadow'>
          ①
        </a>
        <a onClick={this.shakeDice1} class='btn-square-shadow'>
          ②
        </a>
        <a onClick={this.shakeDice2} class='btn-square-shadow'>
          ③
        </a>
        <button onClick={this.reload}>もう一度</button>
      </div>
    )
  }
}

export default Exchange

render(<Exchange />, document.getElementById('root'))
