import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selector';
import { filterContacts } from '../../redux/contacts/contact-filterSlice';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChange = event => dispatch(filterContacts(event.target.value));

  return (
    <label>
      <p className={s.FilterTitle}>Find contacts bu name</p>
      <input
        className={s.InputFilter}
        name="filter"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
