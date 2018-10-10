import React from 'react';
import Login from '../components/Login/Login';

const Authenticate = (PassedComponent) => 
    class extends React.Component {
        constructor(props) {
            super(props);
          
    	    this.state = {
              loggedIn: false,
              loginCredentials: [
                {
                  username: 'User5',
                  password: '1234'
                },
                {
                  username: 'User2',
                  password: '1234'
                },
                {
                  username: 'User3',
                  password: '1234'
                }
              ],
              loginError: ''
            }
          }
          componentDidMount() {
            this.setState({
              loggedIn: JSON.parse(localStorage.getItem('loggedIn'))
            })
          }//end comp did mount

           login = (e) => {
              
            e.preventDefault();
            const fields = e.target.childNodes;
            let username = '';
            let password = '';
             fields.forEach(field => {
              if(field.name === 'username') {
                username = field.value;
              }
              if(field.name === 'password') {
                password = field.value;
              }
            })
            this.state.loginCredentials.map(login => {
                if (login.username === username) {
                  localStorage.setItem('username', username);
                  if(login.password === password) {
                    localStorage.setItem('loggedIn', true);
                    return this.setState({
                      loggedIn: true
                    })
                  }
                  else {
                    return this.setState({
                      loginError: "Please Enter a Valid User Name and Password"
                    })
                  }
                }
                else {
                  return this.setState({
                    loginError: "Please Enter a Valid User Name and Password"
                  })
                }
              })
        }//end login function\


        render() {
            console.log(this.state.loggedIn);
            if(!this.state.loggedIn) {
              return (
                <Login submit={this.login}
                loginError={this.state.loginError}/>
              )
            }
            else {
              return (<PassedComponent />);
            }
            }
    }
export default Authenticate;