import React, { Component } from 'react';
import './App.css';

const buttons = [
  [7, 8, 9, '/'],
  [4, 5, 6, '*'],
  [1, 2, 3, '-'],
  [0, '.', '=', '+']
]

const symbolToClass = sym => {
  return {
    '/': 'divide',
    '*': 'multiply',
    '-': 'subtract',
    '+': 'add',
    '=': 'equals',
    '.': 'dot'
  }[sym] || sym
}

const buttonClass = btn => {
  if (btn === '=') return 'btn-primary'
  if (['/', '*', '-', '+'].includes(btn)) return 'btn-secondary'
  return 'btn-light'
}

const api = expr => `http://localhost:8080/calc/${encodeURIComponent(expr)}`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { expression: '' }
  }

  updateEquation(s) {
    this.setState({ expression: this.state.expression + s})
  }

  equals() {
    if (this.state.expression) {
      fetch(api(this.state.expression))
        .then(res => res.json())
        .then(res => {
          this.setState({ expression: res.result || 0 })
        })
    }
  }

  clear() {
    this.setState({ expression: '' })
  }

  render() {
    return (
      <div className="calculator container">
        <h1>Calculator</h1>
        <input className="input col" value={this.state.expression} readOnly />
        <button className="btn button--clear btn-block btn-danger" onClick={() => this.clear()}>Clear</button>
        {buttons.map(row => {
          return (
            <div className="row" key={row.join()}>
              {row.map((button, j) => {
                return (
                  <div className="col" key={button + j}>{
                    <button
                      className={`btn btn-block ${buttonClass(button)} button--${symbolToClass(button)}`}
                      onClick={() => button === '=' ? this.equals() : this.updateEquation(button)}
                    >
                      {button}
                    </button>
                  }</div>
                )
              })}
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
