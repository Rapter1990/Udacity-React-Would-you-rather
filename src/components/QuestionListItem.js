import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col, Card, Button, Image } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

class QuestionListItem extends Component {


    handleLogin = (e) => {
        e.preventDefault();
        this.props.history.push(`/questions/${this.props.question.id}`);          
    };

    showText = (str) => {
        if (str.length > 12) {
          return str.slice(0, 12);
        }
        return str;
    };

    styles = {
        cardImage: {
          width : 200,
          height : 200,
          alignSelf: 'center',
          marginTop : 30
        }
    }

    render() {

        const { question, user } = this.props;
        const { name, avatarURL } = user;
        const { id, optionOne, optionTwo } = question;

        console.log("name :" , name , " | avatarURL : ", avatarURL + " | id : " , id);

        return (
            <Col xs="6" sm="4">
                <Card style={{ width: '18rem' }}>

                    <Image
                        className="mb-4"
                        src={avatarURL}
                        alt={`image of ${name}`}
                        roundedCircle
                        style={this.styles.cardImage}                     
                    />
                    
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                        Would you rather
                        {' '}
                        {this.showText(optionOne.text)}
                        </Card.Text>
                        <Button variant="primary" onClick={this.handleLogin}>View</Button>
                    </Card.Body>
                </Card>
            </Col>
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

export default withRouter(connect(mapStateToProps)(QuestionListItem));
