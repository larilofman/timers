import React from "react"
import PomodoroTimer from "./PomodoroTimer"
import BreakSound from "./sounds/cuckoo.mp3"
import WorkSound from "./sounds/slap.mp3"

class PomodoroApp extends React.Component {
    constructor() {
        super()
        this.state = {
            workHours: 0,
            workMinutes: 0,
            workSeconds: 3,
            breakHours: 0,
            breakMinutes: 0,
            breakSeconds: 2,
            isWork: false,
            isBreak: false,
            timerKey: 0
        }

        this.workSound = new Audio(WorkSound)
        this.breakSound = new Audio(BreakSound)
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.startWorkTimer()
    }

    startWorkTimer() {
        this.setState({ isWork: true });
    }

    isActive() {
        return this.state.isWork || this.state.isBreak
    }

    handleChange = () => {
        this.state.isWork ? this.breakSound.play() : this.workSound.play()

        this.setState(prevState => ({
            isWork: !prevState.isWork,
            isBreak: !prevState.isBreak,

        }))
    }

    handleCancel = () => {
        this.setState({ isWork: false, isBreak: false })
    }

    getPomodoroTimer() {
        if (this.state.isWork) {
            return (
                <PomodoroTimer
                    hours={this.state.workHours}
                    minutes={this.state.workMinutes}
                    seconds={this.state.workSeconds}
                    text={"Work"}
                    key={0}
                    onTimeout={this.handleChange}
                    onCancel={this.handleCancel}
                />)
        } else {
            return (
                <PomodoroTimer
                    hours={this.state.breakHours}
                    minutes={this.state.breakMinutes}
                    seconds={this.state.breakSeconds}
                    text={"Break"}
                    key={1}
                    onTimeout={this.handleChange}
                    onCancel={this.handleCancel}
                />)
        }
    }

    render() {
        const setTimersForm = (
            <form name="setTimers" onSubmit={this.handleSubmit}>

                <p>Work length: </p>
                <label htmlFor="workHours">Hours: </label><input type="number" min="0" max="99" value={this.state.workHours} name="workHours" onChange={this.handleChange} />
                <br />
                <label htmlFor="workMinutes">Minutes: </label><input type="number" min="0" max="59" value={this.state.workMinutes} name="workMinutes" onChange={this.handleChange} />
                <br />
                <label htmlFor="workSeconds">Seconds: </label><input type="number" min="0" max="59" value={this.state.workSeconds} name="workSeconds" onChange={this.handleChange} />
                <br />

                <p>Break length: </p>
                <label htmlFor="breakHours">Hours: </label><input type="number" min="0" max="99" value={this.state.breakHours} name="breakHours" onChange={this.handleChange} />
                <br />
                <label htmlFor="breakMinutes">Minutes: </label><input type="number" min="0" max="59" value={this.state.breakMinutes} name="breakMinutes" onChange={this.handleChange} />
                <br />
                <label htmlFor="breakSeconds">Seconds: </label><input type="number" min="0" max="59" value={this.state.breakSeconds} name="breakSeconds" onChange={this.handleChange} />
                <br />
                <button>Start</button>
            </form>)

        return (
            <div className="eggTimerApp">
                {!this.isActive() ? setTimersForm : this.getPomodoroTimer()}
            </div>
        )
    }
}

export default PomodoroApp