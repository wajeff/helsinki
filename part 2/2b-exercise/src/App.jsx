import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 0,
    }
  ]) 
  const [newName, setNewName] = useState('add name')

  const handleInputChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const addValue = (event) =>{
    event.preventDefault()
    const action = event.nativeEvent.submitter.value;
    if(action === 'addName'){
      const nameObject = {
      name: newName,
      id: persons.length
    }
      const exists = persons.some(person => person.name === newName)
      exists ? 
        alert(`${newName} already exists in the phonebook`) : 
        setPersons(persons.concat(nameObject))
        setNewName('')
    }
    
  }
  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addValue}>
        <div>
          name: <input value = {newName} onChange = {handleInputChange} />
        </div>
        <div>
          <button type="submit" value="addName" >add</button>
        </div>
        <div>
          phone: <input value = {newName} onChange = {handleInputChange} />
        </div>
         <div>
          <button type="submit" value="addNumber">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map((person)=>{
          return(<li key = {person.id}>{person.name}</li>)
          })}
        </ul>
        
      </div>
      ...
    </div>
  )
}

export default App