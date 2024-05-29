// Contact.jsx
import React from "react";
import { FaPhoneAlt } from "react-icons/fa"; 
import { MdPerson } from "react-icons/md";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ dataContact }) => {
  if (!dataContact) return null;

  const { id, name, number } = dataContact;
  const dispatch = useDispatch();
  
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    
    <li className={css.contact}>
      <div className={css.contactContainer}>
        <div className={css.contactItem}>
          <MdPerson />
          <p>{name}</p>
        </div>
        <div className={css.contactItem}>
          <FaPhoneAlt />
          <p >{number}</p>
        </div>
      </div>
      <button className={css.contactBtn} onClick={handleDeleteContact}>
        Delete
      </button>
      </li>
    
  );
};

export default Contact;