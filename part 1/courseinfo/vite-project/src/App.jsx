

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises:10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises:7
  }
  const part3 = {
    name: 'State of a component',
    exercises:14
  }

  const Header = (props) => {
    return (
      <h1>
        {props.course}
      </h1>
    )
  }

  const Content = () =>{
    const Part = (props) =>{
      return(
        <>
          <p>{props.part} {props.exercise}</p>
        </>
      )
    }
    return (
      <section>
        <Part part={part1.name}/>
        <Part part={part2.name}/>
        <Part part={part3.name}/>
      </section>
    )
  }
  const Total = () =>{
    return(
      <>
        <p>Number of exercises {part1.exercises+part2.exercises+part3.exercises}</p>
      </>
      )
    }

  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Total/>
    </div>
  )
}

export default App