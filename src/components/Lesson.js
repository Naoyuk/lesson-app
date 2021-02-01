import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false}
  }

  toggleModal() {
    this.setState({isModalOpen: !this.state.isModalOpen});
  }

  render() {
    let modal;
    if(this.state.isModalOpen) {
      modal = (
        <div 
          className='modal'
          onClick={() => {this.toggleModal()}}
        >
          <div
            className='modal-inner'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='modal-header'>
              <div className='modal-introduction'>
                <h2>{this.props.name}</h2>
                <p>{this.props.introduction}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return(
      <div className="lesson-card">
        <div 
          className="lesson-item"
          onClick={() => {this.toggleModal()}}
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
