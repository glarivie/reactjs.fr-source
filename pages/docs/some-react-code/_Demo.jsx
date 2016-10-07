import React from 'react'
import ReactDOM from 'react-dom'
import range from 'lodash/range'

const Demo = React.createClass({
  getInitialState () {
    return { mouse: [250, 300] }
  },

  componentDidMount () {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      left: rect.left,
      top: rect.top,
    })
  },

  getValues (currentPositions) {
    // No currentPositions means it's the first render for Spring
    if (!currentPositions) {
      return { val: range(6).map(() => [0, 0]) }
    }
    const endValue = currentPositions.val.map((_, i) => {
      // hack. We're getting the currentPositions of the previous ball, but in
      // reality it's not really the "current" position. It's the last render's.
      // If we want to get the real current position, we'd have to compute it
      // now, then read into it now. This gets very tedious with this API.
      if (i === 0) {
        return this.state.mouse
      } else {
        return currentPositions.val[i - 1]
      }
    })
    return { val: endValue, config: [120, 17] }
  },

  handleMouseMove ({ pageX, pageY }) {
    this.setState({ mouse: [pageX-this.state.left, pageY-this.state.top] })
  },

  handleTouchMove ({ touches }) {
    this.handleMouseMove(touches[0])
  },

  render () {
    return (
      <h1>DEMO.jsx</h1>
    )
  },
})

export default Demo
