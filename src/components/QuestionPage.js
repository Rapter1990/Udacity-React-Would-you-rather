import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Image, Button, Form } from 'react-bootstrap';
import QuestionResult from './QuestionResult'
import { handleAnswerQuestion } from '../actions/questions';
import { withRouter } from 'react-router-dom';

 class QuestionPage extends Component {

    state = {
        selectedOption : ''
    }


    styles = {
        cardImage: {
          width : 250,
          height : 250,
          alignSelf: 'center',
          marginTop : 30
        },
        cardText: {
            alignSelf: 'center'
        }
    }


    handleAnsweredQuestion = (e) => {
        e.preventDefault();

        this.props.dispatch(
            handleAnswerQuestion({
            qid: this.props.question.id,
            answer: this.state.selectedOption,
          })
        );

        this.setState(
            {
                selectedOption: ''
            }
        );

        this.props.history.push(`/questions/${this.props.question.id}/view`);    
    }

    render() {

        const { question, authedUser, user } = this.props;

        const { optionOne, optionTwo } = question;

        const { name , avatarURL} = user;


        if (optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)) {
            return <QuestionResult question={question} authedUser={authedUser} id={this.props.question.id}/>;
        } else {


            return (
                <Container>
                    <Row className="mt-4">
                        <Col
                            md={{ span: 10, offset: 1 }}
                            lg={{ span: 10, offset: 1 }}
                        >
                        <Card>
                            <Card.Header>{name} asks </Card.Header>
                            <Image
                                className="mb-4"
                                src={avatarURL}
                                alt={`image of ${name}`}
                                roundedCircle
                                style={this.styles.cardImage}                     
                            />
                            <Card.Text as="h3" className="mb-3" style={this.styles.cardText}>
                                Would you rather
                            </Card.Text>

                            <Form
                                className="text-center"
                            >
                                <Form.Check
                                    className="mb-3"
                                    type="radio"
                                    id="optionOne"
                                    label={optionOne.text}
                                    name="options"
                                    value="optionOne"
                                    onChange={(e) => this.setState({selectedOption: 'optionOne'})}
                                    checked={this.state.selectedOption === 'optionOne'}
                                />
    
                                <Form.Check
                                    className="mb-3"
                                    type="radio"
                                    id="optionTwo"
                                    label={optionTwo.text}
                                    name="options"
                                    value="optionTwo"
                                    onChange={(e) => this.setState({selectedOption: 'optionTwo'})}
                                    checked={this.state.selectedOption === 'optionTwo'}
                                />
    
                                <Button
                                    onClick={this.handleAnsweredQuestion}
                                    className="mb-3"
                                    variant="primary"
                                    disabled={this.state.selectedOption !== 'optionOne' && this.state.selectedOption !== 'optionTwo'}
                                >
                                    Submit
                                </Button>
                            </Form>

                        </Card>
    
                        </Col>
                    </Row>
                </Container> 
            )


        }
                
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id];

    const { author } = question;

    return {
      authedUser,
      question,
      user: users[author]
    };
  }

export default withRouter(connect(mapStateToProps)(QuestionPage));