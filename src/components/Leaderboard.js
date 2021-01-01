import React, { Component } from 'react'
import { connect } from "react-redux";
import { Container, Row, Card} from 'react-bootstrap';
import LeaderBoardUserCard from "./LeaderBoardUserCard"

class Leaderboard extends Component {


    styles = {
        cardText: {
            alignSelf: 'center'
        }
    }

    render() {

        const { users } = this.props;

        return (
            <Container>
                    <Row className="mt-4">
                    
                        <Card.Text as="h3" className="mb-3" style={this.styles.cardText}>
                            Leaderboard
                        </Card.Text>

                        {users.map((user) => (
                            <LeaderBoardUserCard user={user} key={user.id} />
                        ))}

                    </Row>
            </Container> 
        )
    }
}

function mapStateToProps({ users }) {
    return {
      users: Object.keys(users)
        .sort((a, b) => {
          const answersA = Object.keys(users[a].answers).length;
          const answersB = Object.keys(users[b].answers).length;
          const questionsA = users[a].questions.length;
          const questionsB = users[b].questions.length;
  
          return answersB + questionsB - (answersA + questionsA);

        })
        .map((id) => users[id]),
    };
  }
  
  export default connect(mapStateToProps)(Leaderboard);
