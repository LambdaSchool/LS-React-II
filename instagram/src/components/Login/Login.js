import React from 'react';
import { Form, Input, Button } from 'reactstrap';
import logo from '../../assets/iglogo.png';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(); 
         this.state = {
             username: '',
             password: ''
         }
  }

  changeUsernameHandler = (event) => {
    this.setState({
        username: event.target.value
    })
  }

  changePasswordHandler = (event) => {
      this.setState({
          password: event. target.value
      })
  }

  submitLogin = (event) => {
    const username = this.state.username; 
    const password = this.state.password; 
    localStorage.setItem("username", username); 
    localStorage.setItem("password", password); 
    window.location.reload();
  }

  render() {
    return (
        <div className="login-form text-center">
          <Form>
          <img src = {logo} alt="logo" height="100"/>

          <Input
          type="text" 
          placeholder="Username..." 
          name="username"
          value={this.state.username}
          onChange={this.changeUsernameHandler}
          />

          <Input 
          type="text"  
          placeholder="Password..."  
          name="password"
          value={this.state.password}
          onChange={this.changePasswordHandler}
          />

          <Button  
          color="primary"
          onClick={this.submitLogin}
          >
          Login
          </Button>
          </Form>
        </div>
    );
  
  }

};

export default Login;