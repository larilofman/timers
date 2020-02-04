import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Timer from "./Timer"
import EggTimerApp from "./EggTimerApp"
import PomodoroApp from "./PomodoroApp"

function Header() {
    return (
        <div className="navbar">
            <Router>
                <div>
                    <h1>Timers</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/eggtimer">EggTimer</Link>
                            </li>
                            <li>
                                <Link to="/pomodorotimer">PomodoroTimer</Link>
                            </li>
                            <li>
                                <Link to="/timer">Timer</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/eggtimer" component={EggTimer} />
                    <Route path="/pomodorotimer" component={PomodoroTimer} />
                    <Route path="/timer" component={TimerApp} />
                </div>
            </Router>
        </div>
    )
}

const EggTimer = () => {
    return (
        <EggTimerApp />
    )
}

const PomodoroTimer = () => {
    return (
        <PomodoroApp />
    )
}

const TimerApp = () => {
    return (
        <Timer />
    )
}

export default Header