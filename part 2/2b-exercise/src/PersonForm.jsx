const PersonForm = ({addValue, newName, newNumber, handleInputChange}) => {
  return (
    <div>
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
    </div>
  )
}

export default PersonForm