import React, { Component } from 'react';
import './App.css';
import { Countdown } from './countdown/countdown.component';
import Moment from 'moment';

class App extends Component {
  render() {
    const date = Moment().add(2, 'days');
    /**
     * Use one of for test different dates: 
     const date = Moment().add(2, 'days'); // <-- image date seems to be 2 days ahead
     const date = Moment().add(5, 'seconds'); // <-- use this for fun
     const date = Moment().add(1, 'minutes').add(5, 'seconds');
     const date = Moment('2018-07-01');
     */
    return (
      <div className="App">
          <Countdown targetDate={date}/>
      </div>
    );
  }
}

export default App;
