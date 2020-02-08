import React from "react"
import TestSound from "./sounds/cuckoo.mp3"

function VolumeTester() {
    const testVol = () => {
        const audio = new Audio(TestSound)
        audio.play();
    }
    return (
        <div className="volumetester">
            <button className="btn" onClick={testVol}>Test Volume</button>
        </div>
    )
}

export default VolumeTester
