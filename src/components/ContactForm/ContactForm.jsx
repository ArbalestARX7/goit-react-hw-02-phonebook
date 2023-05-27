import React, { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputHandler = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.formSubmitHandler(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.contactForm} onSubmit={this.onFormSubmit}>
        <label htmlFor="name" className={css.contactLabel}>
          Name
          <input
            className={css.contactInput}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onInputHandler}
          />
        </label>
        <label htmlFor="number" className={css.contactLabel}>
          Number
          <input
            className={css.contactInput}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onInputHandler}
          />
        </label>
        <button className={css.contactBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
