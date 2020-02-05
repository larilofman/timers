import React from "react"
import toHHMMSS from "./utils"

class Timer extends React.Component {
    state = {
        startTime: 0,
        time: 0,
        isRunning: false
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    // set startTime to now and time elapsed to 0
    startTimer = () => {
        this.setState({
            startTime: Date.now(),
            time: 0,
            isRunning: true
        })

        this.startInterval()
    }

    // set startTime to (now - time elapsed)
    resumeTimer = () => {
        this.setState(prevState => (
            {
                startTime: Date.now() - prevState.time,
                isRunning: true
            }))

        this.startInterval()
    }

    startInterval() {
        this.timer = setInterval(() => {
            this.setState({ time: Date.now() - this.state.startTime })
        }, 1000)
    }

    pauseTimer = (t) => {
        clearInterval(this.timer)
        this.setState({ isRunning: false })
    }

    render() {
        document.title = "Timer"
        return (
            <div className="timer">
                <h1>Stopwatch </h1>
                <p>{toHHMMSS(this.state.time)}</p>

                <div className="timerbtns">
                    <button className="btn" onClick={this.startTimer} disabled={this.state.isRunning}>Start</button>
                    <button className="btn" onClick={this.resumeTimer} disabled={this.state.time === 0 || this.state.isRunning}>Resume</button>
                    <button className="btn" onClick={this.pauseTimer} disabled={!this.state.isRunning}>Pause</button>
                </div>

            </div>
        )

    }
}

export default Timer