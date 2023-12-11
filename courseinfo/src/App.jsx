const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => <>
  {props.parts.map((c, index) => <div key={index}>{c.name} {c.exercises}</div>)}
</>

const Total = (props) => <p>Number of exercises {props.parts.reduce((prev, part) => prev + part.exercises, 0)}</p>

const App = () => {
  const course = {
    name: 'Half Stack application development', parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App