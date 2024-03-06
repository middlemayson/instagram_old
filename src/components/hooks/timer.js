import React, { Component } from 'react';

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { timeSinceLoad: '' };
    this.startTime = new Date().getTime();
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.displayTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  displayTime() {
    const currentTime = new Date().getTime();
    const timeDifferenceSeconds = Math.floor((currentTime - this.startTime) / 1000);
    let timeString = '';
    if (timeDifferenceSeconds < 60) {
      timeString = `${timeDifferenceSeconds} sec ago`;
    } else if (timeDifferenceSeconds < 3600) {
      const minutes = Math.floor(timeDifferenceSeconds / 60);
      timeString = `${minutes} min ago`;
    } else if (timeDifferenceSeconds < 86400) {
      const hours = Math.floor(timeDifferenceSeconds / 3600);
      timeString = `${hours} hours ago`;
    } else {
      const days = Math.floor(timeDifferenceSeconds / 86400);
      timeString = `${days} days ago`;
    }
    this.setState({ timeSinceLoad: timeString });
  }

  render() {
    return (
      <div>
        {this.state.timeSinceLoad}
      </div>
    );
  }
}

export default TimerComponent;