// Code SimpleComponentHere Here

import React from 'react'

export default class SimpleComponentHere extends React.Component {
  constructor() {
    super()

    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    const currentMood = this.state.mood === "happy" ? "sad" : "happy"
    this.setState({ mood: currentMood });

  }
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
