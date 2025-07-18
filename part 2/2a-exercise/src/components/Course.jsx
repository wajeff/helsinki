const Courses = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
    <div>
       {courses.map(course => (
        <div key = {course.id}>
          <h1>{course.name}</h1>
          <div>
            {course.parts.map((part) => 
              <div key={part.id}> 
                {part.name} {part.exercises}
              </div>)}
          </div>

          <div>
            Total of {course.parts.reduce((initValue, parts)=> initValue + parts.exercises,0)} exercises
          </div>
        </div>
      ))}
    </div>   




      <div>
          {/* {courses.parts.reduce((initialValue, part)=> initialValue + part.exercises,0)} */}
      </div>
    </>
  )
}

export default Courses