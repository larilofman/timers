const toHHMMSS = (millisecs, ceil = false) => {
    var sec_num = ceil ? Math.ceil(millisecs / 1000) : Math.floor(millisecs / 1000)
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours, minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":")
}

export default toHHMMSS