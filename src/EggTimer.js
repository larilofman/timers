import React from "react"
import toHHMMSS from "./utils"
import UncleKornicob from "./sounds/UncleKornicob.mp3"

class EggTimer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            timeLeft: 0,
            endTime: 0,
            totalTime: 0,
            isRunning: true,
        }

        this.alarmSound = new Audio(UncleKornicob)
    }

    componentDidMount() {
        this.startTimer()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        this.alarmSound.currentTime = 0
        this.alarmSound.pause()
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
        this.alarmSound.loop = true
        this.alarmSound.play()
        this.setState({ isRunning: false })
    }

    cancelAlarm = (event) => {
        event.preventDefault()

        clearInterval(this.timer)
        this.alarmSound.currentTime = 0
        this.alarmSound.pause()

        this.props.cancelFunc(this)
    }

    render() {
        const timerRunningForm =
            <form name="runTimer" onSubmit={this.cancelAlarm}>
                <p>{this.props.text ? this.props.text + ":" : "Timer:"} {toHHMMSS(this.state.timeLeft, true)}</p>
                <br />
                <button>Cancel</button>
            </form>

        const alarmForm =
            <form name="alarm" onSubmit={this.cancelAlarm}>

                <p>Timer {this.props.text} ended after {toHHMMSS(this.state.totalTime, true)}.</p>
                <br />
                <button>Ok</button>
            </form>

        return (
            <div className="eggTimer">
                {this.state.isRunning ? timerRunningForm : alarmForm}
            </div>
        )
    }
}

export default EggTimer