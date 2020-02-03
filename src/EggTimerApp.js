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
            id: this.state.timerID
        }

        this.setState(prevState => ({
            eggTimers: [...prevState.eggTimers, newEggTimer],
            timerID: prevState.timerID + 1
        }))
    }

    cancelAlarm = (eggTimer) => {
        console.log(eggTimer.props.id)
        this.setState(prevState => ({
            eggTimers: prevState.eggTimers.filter(timer => timer.id != eggTimer.props.id)
        }))
    }

    render() {
        const setTimerForm =
            <form name="setTimer" onSubmit={this.handleSubmit}>
                Hours: <input type="number" min="0" max="99" value={this.state.hours} name="hours" onChange={this.handleChange} />
                <br />
                Minutes: <input type="number" min="0" max="59" value={this.state.minutes} name="minutes" onChange={this.handleChange} />
                <br />
                Seconds: <input type="number" min="0" max="59" value={this.state.seconds} name="seconds" onChange={this.handleChange} />
                <br />
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
                            cancelFunc={this.cancelAlarm}
                            id={eggTimer.id}
                        /></li>)}
                </ul>
            </div>
        )
    }
}

export default EggTimerApp