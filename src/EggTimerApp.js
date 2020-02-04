import React from "react"
import EggTimer from "./EggTimer"

class EggTimerApp extends React.Component {
    constructor() {
        super()
        document.title = "Egg Timers"
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 1,
            timerText: "",
            eggTimers: [],
            timerID: 1,
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.startNewEggTimer()
    }

    startNewEggTimer() {
        const newEggTimer = {
            hours: this.state.hours,
            minutes: this.state.minutes,
            seconds: this.state.seconds,
            text: this.state.timerText,
            id: this.state.timerID
        }

        this.setState(prevState => ({
            eggTimers: [...prevState.eggTimers, newEggTimer],
            timerID: prevState.timerID + 1,
            timerText: ""
        }))
    }

    cancelAlarm = (eggTimer) => {
        this.setState(prevState => ({
            eggTimers: prevState.eggTimers.filter(timer => timer.id !== eggTimer.props.id)
        }))
    }

    render() {
        const setTimerForm =
            <form name="setTimer" onSubmit={this.handleSubmit}>
                <p>Add new Timer: </p>
                <label htmlFor="hours">Hours: </label><input type="number" min="0" max="99" value={this.state.hours} name="hours" onChange={this.handleChange} />
                <br />
                <label htmlFor="minutes">Minutes: </label><input type="number" min="0" max="59" value={this.state.minutes} name="minutes" onChange={this.handleChange} />
                <br />
                <label htmlFor="seconds">Seconds: </label><input type="number" min="0" max="59" value={this.state.seconds} name="seconds" onChange={this.handleChange} />
                <br />
                <label htmlFor="timerText">Text: </label><input type="text" maxLength="50" value={this.state.timerText} name="timerText" onChange={this.handleChange} />
                <button>Start</button>
            </form>
        return (
            <div className="eggTimerApp">
                {setTimerForm}
                <ul>
                    {this.state.eggTimers.map((eggTimer) => <li key={eggTimer.id}>
                        <EggTimer
                            seconds={eggTimer.seconds}
                            minutes={eggTimer.minutes}
                            hours={eggTimer.hours}
                            text={eggTimer.text}
                            cancelFunc={this.cancelAlarm}
                            id={eggTimer.id}
                        /></li>)}
                </ul>
            </div>
        )
    }
}

export default EggTimerApp