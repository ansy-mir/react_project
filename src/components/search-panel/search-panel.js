import React, { Component } from 'react';

import './search-panel.css'

export default class SearchPanel extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  onUpdateSearch(e) {
    const term = e.target.value
  }

  render() {
    return (
      <input
          className="form-control search-input"
          type="text"
          placeholder="Поиск по записям"
          onChange={this.onUpdateSearch}
      />
    )
  }
  
}