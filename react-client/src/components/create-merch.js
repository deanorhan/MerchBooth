import React, { Component } from 'react';
import axios from 'axios';

export default class CreateMerch extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      price: 0.0
    }
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const merch = {
      title: this.state.title,
      price: this.state.price
    }

    console.log(merch);

    axios.post('http://localhost:4000/merch', merch)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Merch</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>

        <div className="form-group">
          <label>Price: </label>
          <input type="number"
              required
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Merch" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
