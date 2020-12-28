import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import QuestionListItem from './QuestionListItem'
import { Row } from 'react-bootstrap';

class QuestionList extends Component {
    
    render() {

        const { questions } = this.props;

        return (
            <div>
                 <Row>
                    {questions.map((id) => (
                        <QuestionListItem key={id} id={id} />
                    ))}
                </Row>
            </div>
        )
    }
}


  
export default withRouter(QuestionList);