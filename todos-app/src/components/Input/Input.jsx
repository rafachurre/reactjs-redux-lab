import React, { Component } from 'react'
import './Input.scss'

export default class Input extends Component {
  constructor(props){
    super();
    this.state = {
      type: props.type || 'text',
      placeholder: props.placeholder || '',
      value: props.value || ''
    }

    //Bind contexts
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  render() {
    return (
      <input className="input"
            type={this.state.type}
            placeholder={this.state.placeholder}
            value={this.state.value}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}/>
    )
  }

  handleInputChange(e){
    this.setState({
      value: e.target.value
    })
  }

  handleKeyDown(e){
    if(e.nativeEvent.key === "Enter"){
      //Call redux here  
      alert(this.state.value);
      this.clearInput();
    }
  }

  clearInput(){
    this.setState({
      value: ''
    })
  }
}
