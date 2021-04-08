import React, { Component } from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onValueChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    //ощищаем поле ввода после добавления поста
    this.setState({
      text: ''
    })
    }
  }

  render() {
    return (
      <form 
        className="bottom-panel d-flex"
        //Событие submit нужно вешать именно на форму, а не на кнопку
        onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What are you doing now?"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          //делаем инпут контролируемым state объектом
          value={this.state.text}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
          // onClick={() => onAdd('Hello')}
          >      
          Добавить
          </button>
      </form>
    )
  }

}
  