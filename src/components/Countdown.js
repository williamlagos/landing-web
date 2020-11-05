import React from 'react'

const isBrowser = typeof window !== 'undefined'

class Countdown extends React.Component {
  constructor (props) {
    super(props)
    // const seconds = isBrowser ? window.localStorage.getItem('accessed') : 604800
    const seconds = 604800
    this.state = { time: {}, seconds: seconds }
    this.timer = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
  }

  secondsToTime (secs) {
    const hours = Math.floor(secs / (60 * 60))

    const divisorForMinutes = secs % (60 * 60)
    const minutes = Math.floor(divisorForMinutes / 60)

    const divisorForSeconds = divisorForMinutes % 60
    const seconds = Math.ceil(divisorForSeconds)

    const obj = {
      h: hours,
      m: minutes,
      s: seconds
    }
    return obj
  }

  componentDidMount () {
    const timeLeftVar = this.secondsToTime(this.state.seconds)
    this.setState({ time: timeLeftVar })
    this.startTimer()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  startTimer () {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000)
    }
  }

  countDown () {
    // Remove one second, set state so a re-render happens.
    const seconds = this.state.seconds - 1
    if (seconds % 5 === 0) {
      console.log(seconds)
      isBrowser && window.localStorage.setItem('accessed', seconds)
    }

    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    })

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer)
    }
  }

  render () {
    return (
      <div className="row">
        {/* <button onClick={this.startTimer}>Start</button> &nbsp; */}
        <div className="four columns center"><h1>{this.state.time.h} <br/>Horas</h1></div>
        <div className="four columns center"><h1>{this.state.time.m} <br/>Minutos</h1></div>
        <div className="four columns center"><h1>{this.state.time.s} <br/>Segundos</h1></div>
      </div>
    )
  }
}

export default Countdown
