import React, { Component } from "react";

//GET /users/:username/received_events/public

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/bradvatne/events/public")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <p>
            This is still under construction, but its basic purpose is to
            demonstrate I can make an API call.<br/>
          </p>
        </div>
      );
    }
  }
}

export default Github;
