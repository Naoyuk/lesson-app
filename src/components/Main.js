import React from 'react';
import Lesson from './Lesson';

class Main extends React.Component {
  render() {
    const lessonItems = [
      {
      name: 'HTML & CSS',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
      introduction: 'HTMLとCSSについての勉強をします',
      },
      {
      name: 'JavaScript',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
      introduction: 'JavaScript(ES6)についての勉強をします',
      },
      {
      name: 'React',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
      introduction: 'Reactの勉強をします',
      }
    ];
    return(
      <div className='main-wrapper'>
        <div className='main'>
          <div className='lesson-container'>
            <h3>学べるレッスン</h3>
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
        </div>
      </div>
    )
  }
}

export default Main;
