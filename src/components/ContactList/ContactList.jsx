import css from './ContactList.module.css';
export const ContactList = ({ contacts, filter, handleDelete }) => {
    return (
        <>
            {filter ? false : <ul className={css.list}>
                {contacts.map(el => <li className={css.item} key={el.id}><p>{el.name}: {el.number}</p><button onClick={(e) => handleDelete(e)} className={css.btn} data-id={el.id}> Delete </button></li>)}
            </ul>}
        </>

    )
}