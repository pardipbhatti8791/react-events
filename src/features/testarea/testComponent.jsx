import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'
import { incrementCounter, decrementCounter } from './testAcions';

class TestComonent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h1>Hello {data}</h1>
        <Button onClick={incrementCounter} color='green' content='Increment' />
        <Button onClick={decrementCounter} color='red' content='Decrement' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.test.data
  }
}

const mapDisptachActions = {
  incrementCounter,
  decrementCounter
}

export default connect(mapStateToProps, mapDisptachActions)(TestComonent);
