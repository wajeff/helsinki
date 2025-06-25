import { useState } from 'react'

const Button = ({text, onClick}) =>{
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value})=>{
  return(
    <tr>
      <td>{text} </td>
      <td>{value} </td>
      
    </tr>
  )
}
const Statistics = ({good, bad, neutral, average, positive})=>{
  return(
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text = 'good' value = {good}/>
      <StatisticLine text = 'neutral' value = {neutral}/>
      <StatisticLine text = 'bad' value = {bad}/>
      <StatisticLine text = 'average' value = {typeof average[0] === 'number' ? average.reduce((a,b)=>a+b,0)/average.length: 0}/>
      <StatisticLine text = 'positive' value = {positive !==0 ? (positive/total*100).toFixed(2) + ' %':0 +' %'}/>
        </tbody>
      </table>
      
    </div>
  )
}

const App = () => {
  const [total, setTotal] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [average, setAverage] = useState([])
  const [positive, setPositive] = useState(0)

  const increaseGoodValue = () =>{
    let newGood  = good + 1
    let newTotal = total + 1
    let newPositive = positive + 1
    setTotal (newTotal)
    setGood(newGood)
    setAverage(prev=>prev.concat(1))
    setPositive(newPositive)
  }
  const increaseNeutralValue = () =>{
    let newNeutral = neutral+1
    let newTotal = total + 1
    setTotal (newTotal)
    setNeutral(newNeutral)
    setAverage(prev=>prev.concat(0))
  }
  const increaseBadValue = () =>{
    let newBad = bad + 1
    let newTotal = total + 1
    setTotal (newTotal)
    setBad(newBad)
    setAverage(prev=>prev.concat(-1))
  }
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button text='good' onClick={increaseGoodValue}/>
      <Button text='neutral' onClick={increaseNeutralValue}/>
      <Button text='bad' onClick={increaseBadValue}/>

      <Statistics 
        good = {good} 
        bad = {bad} 
        neutral = {neutral}
        average = {average}
        positive = {positive}
      />
    </div>
  )
}

export default App