import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Col, Image, Form, Container, Row, Button } from 'react-bootstrap';
import loginForm from '../images/loginform.png'
import { withRouter } from "react-router-dom";

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
        if (this.state.authedUser) {
          this.props.dispatch(setAuthedUser(this.state.authedUser));
          this.props.history.push("/");
        } else {
          this.props.history.push("/not-found");
        }        
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
                          <option value=''>Select user</option>
                          {Object.keys(users).map((id) => (
                            <option key={id} value={id} style={{ backgroundImage: `url("${users[id].avatarURL}")` }}>
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
  
export default withRouter(connect(mapStateToProps)(Login));
