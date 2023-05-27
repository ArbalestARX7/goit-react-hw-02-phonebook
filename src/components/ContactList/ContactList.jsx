import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            {name}:<span className={css.contactNumber}>{number}</span>
            <button className={css.listBtn} onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
