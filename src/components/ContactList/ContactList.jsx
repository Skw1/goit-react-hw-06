// ContactList.jsx
import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import { getContact, getFilter } from "../../redux/filterSlice.js";

import css from "./ContactList.module.css";

const ContactList = () => {
  const dataContact = useSelector(getContact);
  const filtQuery = useSelector(getFilter);
  
  const filtData = dataContact.filter((data) => {
    return data.name.toLowerCase().includes(filtQuery.toLowerCase());
  }
  );
  return (
    <ul className={css.list}>
      {filtData.map((data) => {
        return <li key={data.id} className={css.listItem}><Contact dataContact={data} /></li>
      })}
    </ul>
  );
};
export default ContactList