import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                                <Link className="navlink" to="/eggtimer">Egg</Link>
                            </li>
                            <li>
                                <Link className="navlink" to="/pomodorotimer">Pomodoro</Link>
                            </li>
                            <li>
                                <Link className="navlink" to="/timer">Stopwatch</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Route exact path="/" component={HomePage} />
                <Route path="/eggtimer" component={EggTimer} />
                <Route path="/pomodorotimer" component={PomodoroTimer} />
                <Route path="/timer" component={TimerApp} />

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