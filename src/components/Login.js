import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Col, Image, Form, Container, Row, Button } from 'react-bootstrap';
import loginForm from '../images/loginform.png'

class Login extends Component {

    state = {
        authedUser: "",
    };

    handleChange = (e) => {
      const id = e.target.value;
      this.setState(
        {
          authedUser: id
        }
      );
    };
    
    handleLogin = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(this.state.authedUser));
    };


    render() {

        const { users } = this.props;

        console.log(users);

        if (users) {

            return (

              <>
                <Container>
                  <Row className="mt-4">
                    <Col xs={12} className="text-center">
                        <Image src={loginForm} alt="user avatar" fluid />
                    </Col>

                    <Col
                      as={Form}
                      xs={12}
                      md={{ span: 6, offset: 3 }}
                      className="text-center"
                    >
                      <Form.Group>
                        <Form.Label as="h4" className="my-4">
                          Sign In
                        </Form.Label>

                        <Form.Control
                          as="select"
                          name="users"
                          onChange={this.handleChange}
                        >
                          <option defaulvalue="true">Select user</option>
                          {Object.keys(users).map((id) => (
                            <option key={id} value={users[id].name}>
                              {users[id].name}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>

                      <Button
                        onClick={this.handleLogin}
                        disabled={!this.state.authedUser}
                        variant="primary"
                      >
                        Login
                      </Button>

                    </Col>

                  </Row>
                </Container>

              </>
              
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
