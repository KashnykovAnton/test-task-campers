import React, { useState } from 'react';
import styles from './FormComponent.module.css';
import ButtonMain from 'components/ButtonMain/ButtonMain';
import CalendarComponent from 'components/CalendarComponent/CalendarComponent';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [comment, setComment] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'bookingDate':
        return setBookingDate(value);

      case 'comment':
        return setComment(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name && email && bookingDate) {
      alert('Form submitted successfully!');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Booking date:', bookingDate);
      console.log('Comment:', comment);
      setName('');
      setEmail('');
      setBookingDate('');
      setComment('');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
          placeholder="Email"
        />
        <CalendarComponent setDate={setBookingDate} date={bookingDate}/>
        <textarea
          name="comment"
          value={comment}
          onChange={handleInputChange}
          placeholder="Comment"
        />
        <ButtonMain text="Send" actionType="submit" className="formButton" />
      </form>
    </div>
  );
};

export default FormComponent;
