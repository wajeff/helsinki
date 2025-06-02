

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises:10
  },
  {
    name: 'Using props to pass data',
    exercises:7
  },
  {
    name: 'State of a component',
    exercises:14
  }
]

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
        <Part part={parts[0].name}/>
        <Part part={parts[1].name}/>
        <Part part={parts[2].name}/>
      </section>
    )
  }
  const Total = () =>{
    return(
      <>
        <p>Number of exercises {parts[0].exercises+parts[1].exercises+parts[2].exercises}</p>
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