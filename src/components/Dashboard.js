import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import QuestionPage from '../components/QuestionPage';

class Dashboard extends Component {

    state = {
        value: "",
    };

    filterAnswered = (arr) => {
        const answered = [];
    
        arr.forEach((a) => (Object.keys(this.props.authedUser.answers).includes(a) ? answered.push(a) : ''));
        return answered;
      };
    

    filterUnanswered = (arr) => {
        const unanswered = [];
    
        arr.forEach((a) => (Object.keys(this.props.authedUser.answers).includes(a) ? '' : unanswered.push(a)));
    
        return unanswered;
    };

    render() {

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
                    ? this.filterAnswered(Object.keys(this.props.authedUser.answers))
                    : this.filterUnanswered(Object.keys(this.props.authedUser.answers))}
                />


            </Container>
        )
    }
}

export default Dashboard;
