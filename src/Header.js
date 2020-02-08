import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { HashRouter } from "react-router-dom"
import Timer from "./Timer"
import EggTimerApp from "./EggTimerApp"
import PomodoroApp from "./PomodoroApp"
import Home from "./Home"
import VolumeTester from "./VolumeTester"

function Header() {
    return (
        <div>
            <HashRouter>
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
                {/* <Route exact path="/timers" component={HomePage} /> */}
                <Route exact path="/eggtimer" component={EggTimer} />
                <Route exact path="/pomodorotimer" component={PomodoroTimer} />
                <Route exact path="/timer" component={TimerApp} />
            </HashRouter>
            <VolumeTester />
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