import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  closeModal() {
    this.setState({isModalOpen: false});
  }

  openModal() {
    this.setState({isModalOpen: true});
  }

  render() {
    let modal;
    if(this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'>
              <div className='modal-introduction'>
                <h2>{this.props.name}</h2>
                <p>{this.props.introduction}</p>
              </div>
              <button
                className='modal-close-btn'
                onClick={() => {this.closeModal()}}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      );
    }
    return(
      <div className="lesson-card">
        <div 
          className="lesson-item"
          onClick={() => {this.openModal()}}
        >
          <p>{this.props.name}</p>
          <img 
            className="lessonImage" 
            alt={this.props.name} 
            src={this.props.image}
          />
        </div>
        {modal}
      </div>
    );
  }
}

export default Lesson;
