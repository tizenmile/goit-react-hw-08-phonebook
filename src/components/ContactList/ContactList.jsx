import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
export const ContactList = ({ handleDelete }) => {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    if (contacts.length === 0) return
    return (
        <>
            {filter ? false : <ul className={css.list}>
                {contacts.map(el => <li className={css.item} key={el.id}><p>{el.name}: {el.number}</p><button onClick={(e) => handleDelete(e)} className={css.btn} data-id={el.id}> Delete </button></li>)}
            </ul>}
        </>

    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    handleDelete: PropTypes.func,
};