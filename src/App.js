import React from 'react';
import './App.css';
import RegisterForm from './RegisterForm';
import Login from './Login';

class App extends React.Component
{
  constructor()
  {
    // super(props);
    super();
    this.state = {

    }
  }
  render()
  {
    return(
      <div>
        <RegisterForm/>
        <Login/>
      </div>
    );
  }
}
export default App;