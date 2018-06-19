import React from  'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import './countdown.component.css';
import { TimeBox }  from './timebox/timebox.component';

export class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { targetDate: props.targetDate };
  }
  
  componentWillMount() {
    console.log('componentWillMount');
    this.tick();
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    const { targetDate } = this.state;
    const now = Moment();
    const deltaDays = Moment(targetDate).diff(now, 'days');
    const deltaHours = Moment(targetDate).diff(now.add(deltaDays, 'days'), 'hours');
    const deltaMinutes = Moment(targetDate).diff(now.add(deltaHours, 'hours'), 'minutes');
    const deltaSeconds = Moment(targetDate).diff(now.add(deltaMinutes, 'minutes'), 'seconds');
    const complete = (deltaDays + deltaHours + deltaMinutes + deltaSeconds) <= 0;
    if (complete) {
      this.unmountTimer(this.timer);
    }
    this.setState({
      deltaDays, deltaHours, deltaMinutes, deltaSeconds, complete
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  unmountTimer() {
    clearInterval(this.timer);
  }

  render() {
    console.log('render');
    const { deltaDays, deltaHours, deltaMinutes, deltaSeconds, complete } = this.state;
      if (complete) {
        return (
          <img src="https://media.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif" width="100%" alt="run forest run!"/>
        )
      }
      return (
        <div className="countdown">
          <TimeBox value={deltaDays} title={"Days"}/>
          <TimeBox value={deltaHours} title={"Hours"}/>
          <TimeBox value={deltaMinutes} title={"Minutes"}/>
          <TimeBox value={deltaSeconds} title={"Seconds"}/>
        </div>
      );
  }

};

Countdown.propTypes = {
  targetDate: PropTypes.object.isRequired
};

Countdown.defaultProps = {
  deltaDays: 0, deltaHours: 0, deltaMinutes: 0, deltaSeconds: 0
}
