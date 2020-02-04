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
            <div>
                <h1>Time: {toHHMMSS(this.state.time)}</h1>
                <button onClick={this.startTimer} disabled={this.state.isRunning}>Start</button>

                <button onClick={this.resumeTimer} disabled={this.state.time === 0 || this.state.isRunning}>Resume</button>
                <button onClick={this.pauseTimer} disabled={!this.state.isRunning}>Pause</button>
            </div>
        )

    }
}

export default Timer