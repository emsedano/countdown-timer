import React, { Component } from 'react';
import './App.css';
import { Countdown } from './countdown/countdown.component';
import Moment from 'moment';

class App extends Component {
  render() {
    const date = Moment().add(5, 'seconds');
    return (
      <div className="App">
          <Countdown targetDate={date}/>
      </div>
    );
  }
}

export default App;
