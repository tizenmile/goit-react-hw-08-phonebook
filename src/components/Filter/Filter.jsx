import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

export const Filter = ({ handleChange }) => {
    const filter = useSelector(state => state.filter);
    const contacts = useSelector(state => state.contacts.items);
    let index = 0
    return (
        <>
            <label> Find contacts by name
                <input className={css.find} name="filter" type="text" onChange={(event) => handleChange(event)} />
            </label>
            {filter &&
                <table className={css.tableTH}>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody className={css.tbodyH}>
                        {contacts.filter(contact => contact.name
                            .toLowerCase()
                            .includes(filter.toLowerCase()))
                            .map(item => <tr key={item.id}>
                                <td>{index += 1}</td>
                                <td>{item.name}</td>
                                <td>{item.number}</td>
                            </tr>)}

                    </tbody>
                </table>}
        </>

    )
}
Filter.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    handleDelete: PropTypes.func,
    handleChange: PropTypes.func,
};