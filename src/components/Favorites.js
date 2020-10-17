import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Favorites extends Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div className="favorites">
        <h2>Favorites Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.favorites}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

//mapDispatchToProps can be an object or function but usually it's an object.
// In this object, keys become prop names, and values should be action creator functions.
const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
