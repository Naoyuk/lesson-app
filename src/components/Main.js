import React from 'react';
import Lesson from './Lesson';
import ContactForm from './ContactForm';

class Main extends React.Component {
  render() {
    const lessonItems = [
      {
      name: 'HTML & CSS',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
      introduction: 'Learn about HTML & CSS',
      },
      {
      name: 'JavaScript',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
      introduction: 'Learn about JavaScript(ES6)',
      },
      {
      name: 'React',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
      introduction: 'Learn about React.js',
      }
    ];
    return(
      <div className='main-wrapper'>
        <div className='main'>
          <div className='lesson-container'>
            <h3>Lessons</h3>
            {lessonItems.map((lessonItem) => {
              return(
                <Lesson
                  name = {lessonItem.name}
                  image = {lessonItem.image}
                  introduction = {lessonItem.introduction}
                />
              );
            })}
          </div>
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default Main;
