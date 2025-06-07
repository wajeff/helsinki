import {useState} from 'react'

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  
  const increaseByOne = () => setCounter(counter+1)
  const decreaseByOne = () => setCounter(counter-1)
  const setCounterToZero = () => setCounter(0)


  return (
    <>
      <Display counter={counter}/>
      <Button 
        onClick={increaseByOne}
        text='plus'
        
      />
      <Button
        onClick={decreaseByOne}
        text='subtract'
      />
      <Button 
        onClick={setCounterToZero}
        text='set to Zero'
      />
      
    </>
  )
}
export default App