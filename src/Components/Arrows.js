import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Arrows extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            lastPage: this.props.lastPage,
            nextPage: this.props.nextPage,
            expand: false
        }
        }
        
      

  
  render() {

    let next = this.state.nextPage;
    let last = this.state.lastPage;

    return (
      <Router>
      <div>
        <Link to={last}><button>left</button></Link>
        <Link to={next}><button>right</button></Link>
      </div>
      <Route path={last} component={{last}}/>
      </Router>
      
    )
  }
}

export default Arrows
