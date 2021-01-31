import React from 'react';
import Language from './Language';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>言語一覧</h1>
        <Language 
          name = 'HTML & CSS'
          image = 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
        />
        <Language 
          name = 'ES6'
          image = 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
        />
        <Language 
          name = 'React'
          image = 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
        />
      </div>
    )
  }
}

export default App;
