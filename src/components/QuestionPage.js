import React, { Component } from 'react'
import { formatNewQuestion } from '../utils/helper';
import { connect } from 'react-redux';

 class QuestionPage extends Component {


    render() {

        const { question, authedUser } = this.props;

        console.log("question : " , question , " | authedUser : " , authedUser)

        return (
            <div>
                QuestionPage 
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id];
  
    return {
      authedUser,
      question: question
        ? formatNewQuestion(question, users[question.author]) : null,
    };
  }

  export default connect(mapStateToProps)(QuestionPage);