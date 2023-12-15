const Filter = ({ search, onChange }) =>
    <div>
        search: <input value={search} onChange={(event) => onChange(event.target.value)} />
    </div>

export default Filter