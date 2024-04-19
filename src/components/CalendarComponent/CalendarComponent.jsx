import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Icons from '../../assets/icons-sprite.svg';
import './CalendarComponent.css';

const CalendarComponent = ({ setDate, date }) => {
  return (
    <DatePicker
      selected={date}
      onChange={date => setDate(date)}
      dateFormat="MM/dd/yyyy"
      placeholderText="Booking date"
      enableTabLoop={false}
      closeOnScroll={true}
      calendarStartDay={1}
      useWeekdaysShort={true}
      customInput={
          <div className="date-input-wrapper">
          <input
            type="text"
            value={date ? date.toLocaleDateString() : ''}
            onChange={date => setDate(date)}
            required
            placeholder="Booking date"
          />
          <button type="button">
            <svg className="date-input-icon" width="20" height="20">
              <use href={`${Icons}#calendar`}></use>
            </svg>
          </button>
        </div>
      }
    />
  );
};

export default CalendarComponent;
