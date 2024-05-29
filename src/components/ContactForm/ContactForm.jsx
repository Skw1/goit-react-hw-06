// ContactForm.jsx

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid'; 
import css from "./ContactForm.module.css";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Name is required').min(3, 'Minimum 3 characters'),
        number: Yup.string().required('Number is required').min(3, 'Minimum 3 characters'),
      })}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact({ id: nanoid(), ...values }));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formContainer}>
          <label className={css.formLabel} htmlFor="name">Name:</label>
          <Field className={css.formField} type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.formContainer}> 
          <label className={css.formLabel} htmlFor="number">Number:</label>
          <Field className={css.formField} type="text" id="number" name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>
        <button className={css.formBtn} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
