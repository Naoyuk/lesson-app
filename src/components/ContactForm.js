import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSubmitted: false }
  }

  submitInquiry() {
    this.setState({ isSubmitted: true });
  }

  render(){
    let contactForm;
    if(this.state.isSubmitted){
      contactForm = (
        <p className='contact-submit-message'>The inquiry is sent.</p>
      );
    } else {
      contactForm = (
        <form onSubmit={() => {this.submitInquiry()}}>
          <label>
            E-mail address:
            <input type='text' name='email' />
          </label>
          <label>
            Inquiry:
            <textarea name='inquiry' />
          </label>
          <input type='submit' value='Send!' />
        </form>
      );
    }

    return(
      <div className='contact-container'>
        <div className='contact-form'>
          {contactForm}
        </div>
      </div>
    );
  }
}

export default ContactForm;
