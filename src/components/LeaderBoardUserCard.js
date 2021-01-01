import React, { Component } from 'react'
import { Row, Card , Col, Image} from 'react-bootstrap';

class LeaderBoardUserCard extends Component {


    styles = {
        cardImage: {
          width : 200,
          height : 200,
          marginTop : 30
        },
        card: {
          width: '18rem',
          marginBottom : 10  
        }
    }

    render() {

        const { user } = this.props;

        const { name, avatarURL , answers , questions } = user;

        const questionsSize = questions.length;
        const answersSize = Object.keys(answers).length;

        console.log("questionsSize : " , questionsSize , " | answersSize : ", answersSize)

        const totalResult = questionsSize + answersSize;

        console.log("totalResult : " , totalResult)

        return (

            <Col
                xs={12}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 10, offset: 1 }}
                className="mb-4"
            >
                <Card className="text-center">
                <Row as={Card.Body}>
                    <Col xs={12} md={4}>
                        <Image
                            className="mb-4"
                            src={avatarURL}
                            alt={`image of ${name}`}
                            roundedCircle
                            style={this.styles.cardImage}                     
                        />
                    </Col>

                    <Col xs={12} md={8} className="text-left">


                    </Col>
                </Row>

                </Card>
            </Col>
        )
    }
}

export default LeaderBoardUserCard;
