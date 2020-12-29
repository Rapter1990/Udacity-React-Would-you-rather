import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

 class QuestionPage extends Component {

    styles = {
        cardImage: {
          width : 250,
          height : 250,
          alignSelf: 'center',
          marginTop : 30
        },
        cardText: {
            alignSelf: 'center'
        }
    }

    render() {

        const { question, authedUser, user } = this.props;

        const { optionOne, optionTwo } = question;

        const { name , avatarURL} = user;

        console.log("question : " , question , 
                    " | authedUser : " , authedUser, 
                    " | user : " , user)


        return (
            <Container>
                <Row className="mt-4">
                    <Col
                        md={{ span: 10, offset: 1 }}
                        lg={{ span: 10, offset: 1 }}
                    >
                    <Card>
                        <Card.Header>{name} asks </Card.Header>
                        <Image
                            className="mb-4"
                            src={avatarURL}
                            alt={`image of ${name}`}
                            roundedCircle
                            style={this.styles.cardImage}                     
                        />
                        <Card.Text as="h3" className="mb-3" style={this.styles.cardText}>
                            Would you rather
                        </Card.Text>
                    </Card>
                    </Col>
                </Row>
            </Container> 
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id];

    const { author } = question;

    return {
      authedUser,
      question,
      user: users[author]
    };
  }

  export default connect(mapStateToProps)(QuestionPage);