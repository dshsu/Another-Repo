import React, { Component } from 'react';
// import FirstComponent from './components/FirstComponent'
// import SecondComponent from './components/SecondComponent'
// import ThirdComponent from './components/ThirdComponent'
// import Counter from './components/counter'
import TodoApp from './components/todo/ToDoApp'
import './App.css';
import './components/todo/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/> */
        /* <Counter/> */}
        <TodoApp />
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//          My Hello World
//          <FirstComponent></FirstComponent>
//          <SecondComponent></SecondComponent>
//          <ThirdComponent></ThirdComponent>
//       </div>
//     );
//   }
// }

export default App;