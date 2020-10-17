import React, { Component } from "react";

class Search extends Component {
  // what is state?
  state = {
    word: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      word: "",
    });
  };

  render() {
    //console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          name="word"
          placeholder={this.props.defaultValue}
          value={this.state.word}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default Search;

//Why does the Search component show up twice in the browser's console? It has to do with lidecycle methods.
