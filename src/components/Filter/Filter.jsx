import css from '../ContactList/ContactList.module.css';

export const Filter = ({ contacts, filter, handleDelete, handleChange }) => {
    return (
        <>
            <label> Find contacts by name
                <input className={css.find} name="filter" type="text" onChange={(event) => handleChange(event)} />
            </label>
            {filter ? <ul>
                {contacts.filter(contact => contact.name
                    .toLowerCase()
                    .includes(filter.toLowerCase()))
                    .map(filtered => (
                        <li key={filtered.id}>
                            <p>{filtered.name}: {filtered.number}</p>
                            <button onClick={(e) => handleDelete(e)} data-id={filtered.id} className={css.btn}> Delete </button>

                        </li>
                    ))}
            </ul> : false}
        </>

    )
}