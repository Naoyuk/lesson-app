import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: 'test@test.com',
      inquiry: 'Write your inquiries here please.',
    }
  }

  submitInquiry() {
    this.setState({ isSubmitted: true });
  }

  inputEmail(event) {
    const inputValue = event.target.value
    this.setState({email: inputValue})
  }

  inputInquiry(event) {
    const inputValue = event.target.value
    this.setState({inquiry: inputValue})
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
            <input 
              type='text' 
              name='email' 
              value={this.state.email} 
              onChange={(event) => {this.inputEmail(event)}}
            />
          </label>
          <label>
            Inquiry:
            <textarea 
              name='inquiry' 
              value={this.state.inquiry}
              onChange={(event) => {this.inputInquiry(event)}}
            />
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
