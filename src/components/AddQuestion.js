import React, { Component } from 'react'
import { Container, Row ,Col, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { handleCreateQuestion } from '../actions/questions';

class AddQuestion extends Component {


    state = {
        optionFirstQuestion: "",
        optionSecondQuestion: "",
    };

    handleChange = (e) => {
        const optionFirst = e.target.value;
        this.setState(
          {
            optionFirstQuestion: optionFirst
          }
        );
    };

    handleChange = (e) => {
        const optionSecond = e.target.value;
        this.setState(
          {
            optionSecondQuestion: optionSecond
          }
        );
    };

    // Submit Process
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.dispatch(
            handleCreateQuestion(
                this.state.optionFirstQuestion,
                this.state.optionSecondQuestion
            )
        );


        this.setState(
            {
              optionFirstQuestion: '',
              optionSecondQuestion: ''
            }
        );

        // return Home Page
        useHistory.push('/');
    }

    render() {
        return (
            <Container>
                <Row className="mt-3">
                    <Col
                      xs={12}
                      md={{ span: 8, offset: 2 }}
                      className="text-center"
                    >
                        <Col as="h2" sm={12}>
                            Create a new question
                        </Col>

                        <Form.Text as="h4">Would you rather...</Form.Text>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Option first question</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter" 
                                id="optionFirstQuestion"
                                onChange={this.handleFirstQuestion}
                                />
                                <Form.Text className="text-muted">
                                    Write first option of question
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Option second question</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter" 
                                id="optionSecondQuestion"
                                onChange={this.handleSecondQuestion}
                                />
                                <Form.Text className="text-muted">
                                    Write second option of question
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit" block>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>  
            </Container>
        )
    }
}

export default AddQuestion;