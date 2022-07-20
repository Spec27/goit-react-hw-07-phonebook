import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
} from '../../redux/contacts/contactsApi';
import { getFilter } from '../../redux/contacts/contacts-selector';
import Loader from 'components/Loader';

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactsMutation();

  const filter = useSelector(getFilter);
  const normalizeFilter = filter.toLowerCase();
  const filteredContacts =
    contacts &&
    contacts.filter(({ name }) => name.toLowerCase().includes(normalizeFilter));

  return (
    <ul className={s.List}>
      {isFetching && <Loader />}
      {contacts &&
        filteredContacts.map(({ name, phone, id }) => (
          <div key={id} className={s.ContactContainer}>
            <li key={id} className={s.ContactItem}>
              <p className={s.ContactText}>{name}</p>
              <p className={s.ContactText}>{phone}</p>
            </li>
            <button className={s.ContactBtn} onClick={() => deleteContact(id)}>
              Видалити
            </button>
          </div>
        ))}
    </ul>
  );
};
/*  


  
         
   
         */

export default ContactList;
