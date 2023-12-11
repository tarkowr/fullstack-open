const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Richie" />
    </div>
  )
}

export default App
