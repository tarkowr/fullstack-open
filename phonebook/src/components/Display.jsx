const Display = ({ persons, search }) =>
(
    <>
        <h3>Numbers</h3>
        {persons.map(person => {
            if (search.trim() === ''
                || (person.name.toLowerCase().includes(search.toLowerCase())
                    || person.number.toLowerCase().includes(search.toLowerCase()))) {
                return (
                    <div key={person.id}>
                        {person.name} {person.number}
                    </div>
                )
            }
        })}
    </>
)

export default Display