import React, { Component } from 'react'

class QuestionResult extends Component {
    render() {

        const { question, authedUser } = this.props;

        console.log("question : " , question , 
                    " | authedUser : " , authedUser)


        return (
            <div>
                QuestionResult
            </div>
        )
    }
}

export default QuestionResult;