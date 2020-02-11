import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <Fragment>
        <nav class="navbar navbar-expand-sm justify-content-center navbar-dark bg-lime">
          <p>
            {" "}
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link 1
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link 2
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link 3
                </a>
              </li>
            </ul>
          </p>
        </nav>
        <div class="container">
          <h3>Basic Navbar Example</h3>
          <p>
            A navigation bar is a navigation header that is placed at the top of
            the page.
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Home;
