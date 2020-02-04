import React from "react"
import toHHMMSS from "./utils"


class PomodoroTimer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            timeLeft: 0,
            endTime: 0,
            totalTime: 0,
            isRunning: true,
        }
    }

    componentDidMount() {
        this.startTimer()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    startTimer = () => {
        const totalTimer = (this.props.hours * 60 * 60 * 1000) + (this.props.minutes * 60 * 1000) + (this.props.seconds * 1000)

        this.setState({
            endTime: totalTimer + Date.now(),
            timeLeft: totalTimer,
            isRunning: true,
            totalTime: totalTimer
        })

        this.timer = setInterval(this.updateTimer, 1000)
    }

    updateTimer = () => {
        this.setState(prevState => {
            return {
                timeLeft: prevState.endTime - Date.now()
            }
        })

        if (this.state.timeLeft <= 0) {
            this.alarm()
        }
    }

    alarm = () => {
        clearInterval(this.timer)
        this.setState({ isRunning: false })
        this.props.onTimeout()
    }

    render() {
        const timerRunningForm =
            <form name="runTimer" onSubmit={this.cancelAlarm}>
                <p>{toHHMMSS(this.state.timeLeft, true)}</p>
                <br />
                <button onClick={this.props.onCancel}>Cancel</button>
            </form>

        return (
            <div className="eggTimer">
                {this.props.text}
                <br />
                {timerRunningForm}
            </div>
        )
    }
}

export default PomodoroTimer