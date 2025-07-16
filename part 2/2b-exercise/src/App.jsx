import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import { useEffect } from 'react'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('add name')
  const [newNumber, setNewNumber] = useState('add number')
  const [newFilter, setNewFilter] = useState('')
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  const handleInputChange = (event) =>{
    const {name, value} = event.target
    if(name === "name"){
      setNewName(event.target.value)
    } else if (name === 'number'){
      setNewNumber(event.target.value)
    } else if (name === 'filter'){
      setNewFilter(event.target.value)
    }
  }

  const addValue = (event) =>{
    event.preventDefault()
    const action = event.nativeEvent.submitter.value;
    
      const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
      
    }
      const exists = persons.some(person => person.name === newName)
      exists ? 
        alert(`${newName} already exists in the phonebook`) : 
        setPersons(persons.concat(nameObject))
        setNewName('')

    
  }
  // console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleInputChange={handleInputChange}/>

      <PersonForm addValue={addValue} newName={newName} newNumber={newNumber} handleInputChange={handleInputChange}/>
      <h2>Numbers</h2>
      <Persons persons ={persons} newFilter={newFilter}/>
      ...
    </div>
  )
}

export default App