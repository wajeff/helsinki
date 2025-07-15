const Filter = ({newFilter, handleInputChange}) => {
  return (
    <div>filter shown with <input value={newFilter} name ='filter' onChange={handleInputChange}/></div>
  )
}

export default Filter