import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import QuestionListItem from './QuestionListItem'
import { Row } from 'react-bootstrap';

class QuestionList extends Component {


    render() {

        const { questions } = this.props;

        console.log(questions);

        return (
            <div>
                 <Row>
                    {questions.map((question) => (
                        <QuestionListItem key={question.id} id={question.id} />
                    ))}
                </Row>
            </div>
        )
    }
}


  
export default withRouter(QuestionList);