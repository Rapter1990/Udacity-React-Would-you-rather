import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

class Dashboard extends Component {

    state = {
        value: "",
    };

    filterAnswered = (arr) => {
        const answered = [];
    
        arr.forEach((a) => (Object.keys(this.props.questions.answers).includes(a) ? answered.push(a) : ''));
        return answered;
      };
    

    filterUnaswered = (arr) => {
        const unanswered = [];
    
        arr.forEach((a) => (Object.keys(this.props.questions.answers).includes(a) ? '' : unanswered.push(a)));
    
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
            </Container>
        )
    }
}

export default Dashboard;
