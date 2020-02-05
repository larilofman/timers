import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Timer from "./Timer"
import EggTimerApp from "./EggTimerApp"
import PomodoroApp from "./PomodoroApp"
import Home from "./Home"

function Header() {
    return (
        <div>
            <Router>
                <div className="navbar">
                    <nav>
                        <ul>
                            <li>
                                <Link className="navlink" to="/timers/eggtimer">Egg</Link>
                            </li>
                            <li>
                                <Link className="navlink" to="/timers/pomodorotimer">Pomodoro</Link>
                            </li>
                            <li>
                                <Link className="navlink" to="/timers/timer">Stopwatch</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/timers" component={HomePage} />
                <Route exact path="/timers/eggtimer" component={EggTimer} />
                <Route exact path="/timers/pomodorotimer" component={PomodoroTimer} />
                <Route exact path="/timers/timer" component={TimerApp} />
            </Router>
        </div >
    )
}

const HomePage = () => {
    return (
        <Home />
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