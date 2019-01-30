import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom"

import TicTacToe from 'TicTacToe.js'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav class="navbar sticky-top navbar-dark bg-dark">
            This will hold 4 buttons
          </nav>

          <p>
            placeholder for image.  My head shot
          </p>
          <h3>
            Daniel Lagos
          </h3>
            <p>
              Lagos.d@gmail.com
            </p>
            <p>
              A full-stack web developer who is backed by 10 years of experience as an ocer in the US Army and Mortgage Loan Ocersearching for an entry level position in an A.I./Machine Learning Company
            </p>
          <h2>
            skills
          </h2>
            <h3>
            this will be a set of images that will highlight skills.
            </h3>
              <ul>
                <li>JS</li>
                <li>React.js</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>TensorFlow</li>
                <li>HTML & CSS</li>
              </ul>
          <h2>
            Projects
          </h2>
            <p>
              This will be a set of three columns tht will link to my projects.  Images will be links
            </p>
          <div class="row">
            <div class="col">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1024px-Tic_tac_toe.svg.png" alt ="" height = "300"/>
              <Link to={`/ticTacToe/${ticTacToe.id}`}>
              {ticTacToe.name}
              </Link>
              in React.JS
              </div>
            <div class="col">
              TensorFlow Project
            </div>
            <div class="col">
              Treasure Hunt in React.js
            </div>
          </div>
          <Switch>
            <Route
              path="/ticTacToe/:id"
              component={TicTacToe}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
