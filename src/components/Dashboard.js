import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import QuestionPage from '../components/QuestionPage';

class Dashboard extends Component {

    state = {
        value: "unanswered",
    };

    filterAnswered = (arr) => {
        const answered = [];
    
        arr.forEach((question) => (Object.keys(this.props.authedUser.answers).includes(question.id) ? answered.push(question) : ''));
        return answered;
    };
    

    filterUnanswered = (arr) => {
        const unanswered = [];
    
        arr.forEach((question) => (Object.keys(this.props.authedUser.answers).includes(question.id) ? '' : unanswered.push(question)));
    
        return unanswered;
    };

    render() {

        const { questions } = this.props;

        return (
            <Container>
                <Row className="my-3">
                    <Col>
                    <Button
                        variant="outline-dark"
                        onClick={(e) => this.setState({value: 'unanswered'})}
                        value="unanswered"
                        active={this.state.value === 'unanswered'}
                        block
                    >
                        Unanswered Questions
                    </Button>
                    </Col>

                    <Col>
                    <Button
                        variant="outline-dark"
                        onClick={(e) => this.setState({value: 'answered'})}
                        value="answered"
                        active={this.state.value === 'answered'}
                        block
                    >
                        Answered Questions
                    </Button>
                    </Col>
                </Row>

                <QuestionPage
                    questions={this.state.value === 'answered'
                    ? this.filterAnswered(Object.values(questions))
                    : this.filterUnanswered(Object.values(questions))}
                />


            </Container>
        )
    }
}

export default Dashboard;
