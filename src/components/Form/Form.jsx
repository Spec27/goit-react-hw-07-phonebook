import { useState } from 'react';
import {
  useCreateContactsMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsApi';
import s from './Form.module.css';

function Form() {
  const [createContacts] = useCreateContactsMutation();
  const { data: contacts } = useFetchContactsQuery();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (checkRepeatName(name)) {
      alert(`Sory Bro the name ( ${name} ) is already in contacts.`);
      return;
    }

    createContacts({ name, phone: number });
    setName('');
    setNumber('');
  };

  return (
    <form className={s.Form} onSubmit={handleSubmit}>
      <label>
        <input
          className={s.Input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          className={s.Input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={s.FormBtn} type="submit">
        Add Contact
      </button>
    </form>
  );
}

export default Form;
