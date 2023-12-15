const AddEntry = ({ name, number, onNameChange, onNumberChange, onAdd }) =>
(
    <>
        <h3>Add a new</h3>
        <form onSubmit={onAdd}>
            <div>
                name: <input value={name} onChange={(event) => onNameChange(event.target.value)} />
            </div>
            <div>
                number: <input value={number} onChange={(event) => onNumberChange(event.target.value)} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </>
)

export default AddEntry