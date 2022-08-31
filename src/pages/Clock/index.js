import {withRouter} from 'react-router-dom'
import {useEffect, useState} from 'react'
import './index.less'

function Clock() {
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  useEffect(() => {
    const time = new Date()
    setHour(time.getHours())
    setMin(time.getMinutes())
    setSec(time.getSeconds())
  }, [])
  return (
    <div className='clock-page'>
      <div className='clock-content'>
        <div className='clock-main'></div>
        <div className='clock-pane'>
          <span style={{'--i': 1}}>1</span>
          <span style={{"--i": 2}}>2</span>
          <span style={{"--i": 3}}>3</span>
          <span style={{"--i": 4}}>4</span>
          <span style={{"--i": 5}}>5</span>
          <span style={{"--i": 6}}>6</span>
          <span style={{"--i": 7}}>7</span>
          <span style={{"--i": 8}}>8</span>
          <span style={{"--i": 9}}>9</span>
          <span style={{"--i": 10}}>10</span>
          <span style={{"--i": 11}}>11</span>
          <span style={{"--i": 12}}>12</span>
        </div>
        <div className='hour' style={{'--dh': hour + min/60 + sec/3600}}></div>
        <div className='minute' style={{'--dm': min + sec/60}}></div>
        <div className='second' style={{'--ds': sec}}></div>
      </div>
    </div>
  )
}

export default withRouter(Clock)