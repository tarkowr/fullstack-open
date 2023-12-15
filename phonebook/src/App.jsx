import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import AddEntry from './components/AddEntry'
import Display from './components/Display'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  const onAdd = (event) => {
    event.preventDefault()

    if (!newName || !newNumber) {
      return
    }

    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already in this book`)
      return;
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onChange={(newValue) => setSearch(newValue)} />
      <AddEntry
        name={newName}
        onNameChange={(newValue) => setNewName(newValue)}
        number={newNumber}
        onNumberChange={(newValue) => setNewNumber(newValue)}
        onAdd={onAdd} />
      <Display persons={persons} search={search} />
    </div>
  )
}

export default App