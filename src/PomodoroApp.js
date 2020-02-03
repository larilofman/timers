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
            workSeconds: 0,
            breakHours: 0,
            breakMinutes: 0,
            breakSeconds: 0,
            workSound: new Audio(WorkSound),
            breakSound: new Audio(BreakSound)
        }

    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const setTimersForm =
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
            </form>
        return (
            <div className="eggTimerApp">
                {setTimersForm}
                <p>Work: {this.state.workHours} {this.state.workMinutes} {this.state.workSeconds}</p>
                <p>Break: {this.state.breakHours} {this.state.breakMinutes} {this.state.breakSeconds}</p>
            </div>
        )
    }
}

export default PomodoroApp