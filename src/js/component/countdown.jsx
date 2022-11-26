import React from "react";

class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startAt: '',
            counter: '0',
            running: false,
            finished: false,
        }
        this.startCounter = this.startCounter.bind(this);
        this.stopCounter = this.stopCounter.bind(this);
        this.restartCounter = this.restartCounter.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    startCounter() {
        if (!this.state.running) {
            this.state.running = true;
            this.timerID = setInterval(
                () => this.second(),
                1000
            );
        }
    }

    stopCounter() {
        this.state.running = false;
        clearInterval(this.timerID);
    }

    restartCounter() {
        if (this.state.finished == true) this.state.finished = false;
        this.state.counter = this.state.running
            ? this.state.startAt + 1 
            : this.state.startAt;
            this.startCounter();
    }

    second() {
        if (this.state.counter > 0 && this.state.running) {
            this.setState((prevState) => ({counter: prevState.counter - 1}));
        } else if (this.state.counter == 0) this.state.finished = true;
    }

    handleChange(event) {
        this.setState({startAt: Number(event.target.value)});
        if (!this.state.running) {
            this.setState({counter: Number(event.target.value)});
        }
    }

    render() {
        return (
            <div>
                <h2>Start Countdown at:{' '}
                    <input type="number" 
                    value={this.state.startAt} 
                    onChange={this.handleChange}
                    style={{width: "100px"}}
                    />
                    {' '}s
                </h2>
                <h2>Countdown: {this.state.counter} s</h2>
                { this.state.finished && 
                <div className="alert alert-danger alert-dismissible fade show w-50 fs-3 mx-auto" role="alert">
                    Time is over!
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> }
                <button onClick={this.startCounter}>Start</button>
                <button onClick={this.stopCounter}>Stop</button>
                <button onClick={this.restartCounter}>Restart</button>
            </div>
        )
    }
}

export default CountDown;