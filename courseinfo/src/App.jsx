const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => <>
  {props.content.map((c, index) => <div key={index}>{c.name} {c.exercises}</div>)}
</>

const Total = (props) => <p>Number of exercises {props.total}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content = [
    { name: part1, exercises: exercises1 },
    { name: part2, exercises: exercises2 },
    { name: part3, exercises: exercises3 }
  ]
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={total} />
    </div>
  )
}

export default App