import React, { Component } from 'react'

class QuestionPage extends Component {
    
    render() {

        const { questions } = this.props;

        console.log(questions);

        return (
            <div>
                Question Page
            </div>
        )
    }
}

export default QuestionPage;