import { nanoid } from 'nanoid';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}:{number}
          </li>
        ))}
      </ul>
    </div>
  );
};
