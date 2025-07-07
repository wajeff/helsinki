import { useState } from 'react'
import Filter from './Filter'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('add name')
  const [newNumber, setNewNumber] = useState('add number')
  const [newFilter, setNewFilter] = useState('')

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
      id: persons.length,
      
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
      <div>filter shown with <input value={newFilter} name ='filter' onChange={handleInputChange}/></div>


      <form onSubmit = {addValue}>
        <div>
          name: <input value = {newName} name = "name" onChange = {handleInputChange} />
        </div>
        <div>
          phone: <input value = {newNumber} name = "number" onChange = {handleInputChange} />
        </div>
         <div>
          <button type="submit" value="addValue">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {(newFilter)?
            persons.filter((person)=>person.name.toLowerCase().includes(newFilter.toLowerCase())).map((person)=><li>{person.name} {person.number}</li>)
            
            : persons.map((person)=> <li>{person.name} {person.number}</li>)
          }
        </ul>
        
      </div>
      ...
    </div>
  )
}

export default App