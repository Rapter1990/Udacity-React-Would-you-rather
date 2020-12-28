import React, { Component } from 'react'
import { connect } from 'react-redux';

class QuestionListItem extends Component {
    render() {

        const { question, user } = this.props;
        const { name, avatarURL } = user;
        const { id } = question;

        console.log("name :" , name , " | avatarURL : ", avatarURL + " | id : " , id);

        return (
            <div>
                
            </div>
        )
    }
}

function mapStateToProps({ users, questions }, { id }) {
    const { author } = questions[id];
  
    return {
      user: users[author],
      question: questions[id],
    };
}

export default connect(mapStateToProps)(QuestionListItem);
