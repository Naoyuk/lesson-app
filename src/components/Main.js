import React from 'react';
import Lesson from './Lesson';
import ContactForm from './ContactForm';

class Main extends React.Component {
  render() {
    const lessonItems = [
      {
      name: 'HTML & CSS',
      image: 'https://practity.com/en/wp-content/uploads/sites/2/2018/03/html-css-tutorials2.jpg',
      introduction: 'Learn about HTML & CSS',
      },
      {
      name: 'JavaScript',
      image: 'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F7756%2F1a5aab66-8eaf-1684-01f1-923f07c3f971.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e836be37641bd0d8afacf1d49468b0a',
      introduction: 'Learn about JavaScript(ES6)',
      },
      {
      name: 'React',
      image: 'https://cdn.auth0.com/blog/react-js/react.png',
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
          <div className='inquiry-container'>
            <h3>Inquiry</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
