import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {

    state = {
        authedUserId: "",
    };
    
    handleLogin = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(this.state.authedUserId));
    };


    render() {

        const { users } = this.props;

        console.log(users);

        if (users) {
            const userIds = Object.keys(users);
            return (
            
                <div>
                <h3>Login</h3>
                <Dropdown>
                  <Dropdown.Toggle
                  >
                    {this.state.authedUserId}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {userIds.map((userId) => (
                      <Dropdown.Item
                        key={userId}
                        onClick={() => this.setState({ authedUserId: userId })}
                      >
                        {userId}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Button
                  onClick={this.handleLogin}
                  disabled={!this.state.authedUserId}
                >
                  Login
                </Button>
              </div>
    
            )
        }
    }
}

function mapStateToProps({ users }) {
    return {
      users,
    };
}
  
export default connect(mapStateToProps)(Login);
