const Persons = ({newFilter, persons}) => {
  return (
    <div>
        <ul>
          {(newFilter)?
            persons.filter((person)=>person.name.toLowerCase().includes(newFilter.toLowerCase())).map((person)=><li>{person.name} {person.number}</li>)
            
            : persons.map((person)=> <li key = {person.id}>{person.name} {person.number}</li>)
          }
        </ul>
        
      </div>
  )
}

export default Persons