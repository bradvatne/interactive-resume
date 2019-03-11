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
    fetch("https://api.github.com/users/notbrad/events/public")
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
            I performed a '{items[0].type}' on '{items[0].repo.name}' on the date '{items[0].created_at.slice(0, 10)}'
          </p>
        </div>
      );
    }
  }
}

export default Github;
