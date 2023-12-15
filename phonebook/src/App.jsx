import { useState } from 'react'
import Filter from './components/Filter'
import AddEntry from './components/AddEntry'
import Display from './components/Display'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [search, setSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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