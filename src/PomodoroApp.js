import React from "react"
import PomodoroTimer from "./PomodoroTimer"
import BreakSound from "./sounds/cuckoo.mp3"
import WorkSound from "./sounds/slap.mp3"

class PomodoroApp extends React.Component {
    constructor() {
        super()
        this.state = {
            workHours: 0,
            workMinutes: 25,
            workSeconds: 0,
            breakHours: 0,
            breakMinutes: 5,
            breakSeconds: 0,
            isWork: false,
            isBreak: false,
            timerKey: 0,
            roundNum: 1
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

    handleSwap = () => {
        this.state.isWork ? this.breakSound.play() : this.workSound.play()
        // Increment roundNum when break ends
        this.setState(prevState => ({
            roundNum: this.state.isWork ? prevState.roundNum : prevState.roundNum + 1,
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
                    roundNum={this.state.roundNum}
                    onTimeout={this.handleSwap}
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
                    roundNum={this.state.roundNum}
                    onTimeout={this.handleSwap}
                    onCancel={this.handleCancel}
                />)
        }
    }

    render() {
        const setTimersForm = (
            <form name="setTimers" className="setpomodoro" onSubmit={this.handleSubmit}>
                <h2>Set pomodoro intervals</h2>
                <div className="pomodorodialscontainer">
                    <div className="pomodorodials">
                        <p>Work: </p>
                        <div className="pomodorodialslabels">
                            <label htmlFor="workHours">Hours: </label>
                            <label htmlFor="workMinutes">Minutes: </label>
                            <label htmlFor="workSeconds">Seconds: </label>
                        </div>
                        <div className="pomodorodialsinputs">
                            <input type="number" min="0" max="99" value={this.state.workHours} name="workHours" onChange={this.handleChange} />
                            <input type="number" min="0" max="59" value={this.state.workMinutes} name="workMinutes" onChange={this.handleChange} />
                            <input type="number" min="0" max="59" value={this.state.workSeconds} name="workSeconds" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="pomodorodials">
                        <p>Break: </p>
                        <div className="pomodorodialslabels">
                            <label htmlFor="breakHours">Hours: </label>
                            <label htmlFor="breakMinutes">Minutes: </label>
                            <label htmlFor="breakSeconds">Seconds: </label>
                        </div>
                        <div className="pomodorodialsinputs">
                            <input type="number" min="0" max="99" value={this.state.breakHours} name="breakHours" onChange={this.handleChange} />
                            <input type="number" min="0" max="59" value={this.state.breakMinutes} name="breakMinutes" onChange={this.handleChange} />
                            <input type="number" min="0" max="59" value={this.state.breakSeconds} name="breakSeconds" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>


                <button className="btn">Start</button>
            </form>)

        return (
            <div className="eggtimerapp">
                {!this.isActive() ? setTimersForm : this.getPomodoroTimer()}
            </div>
        )
    }
}

export default PomodoroApp