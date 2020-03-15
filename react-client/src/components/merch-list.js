import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const Merch = props => (
  <tr>
    <td>{props.merch.title}</td>
    <td>{props.merch.price}</td>
  </tr>
);

export default class MerchList extends Component {
  constructor(props) {
    super(props);

    this.state = {merch: []};
  };

  componentDidMount() {
    axios.get('http://localhost:4000/merch')
      .then(response => {
        console.log(response.data);
        this.setState({ merch: response.data })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  merchList() {
    return this.state.merch.map(currentmerch => {
      return <Merch merch={currentmerch} key={currentmerch._id}/>;
    })
  };

  render() {
    return (
      <div>
        <h3>Merch available</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { this.merchList() }
          </tbody>
        </table>
      </div>
    )
  }
};
