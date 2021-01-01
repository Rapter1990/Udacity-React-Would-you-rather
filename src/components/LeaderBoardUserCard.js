import React, { Component } from 'react'
import { Row, Card , Col, Image, Table , Badge} from 'react-bootstrap';

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
        },
        text: {
          textAlign: 'center'
        },
        textHeaderCenter: {
          marginLeft: "auto",
          marginRight: "auto"
        }
    }

    render() {

        const { user } = this.props;

        const { name, avatarURL , answers , questions } = user;

        const questionsSize = questions.length;
        const answersSize = Object.keys(answers).length;
        const totalResult = questionsSize + answersSize;

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


                            <Table className="mt-3" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th style={this.styles.textHeaderCenter}> 
                                            <h5>
                                                UserName: 
                                            </h5>    
                                        </th>
                                        <td style={this.styles.text}>
                                            <h5>
                                                <Badge variant="primary">{name}</Badge>
                                            </h5>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th style={this.styles.textHeaderCenter}>
                                            <h5> 
                                                Created Questions: 
                                            </h5>
                                        </th>
                                        <td style={this.styles.text}>
                                            <h5>
                                                <Badge variant="warning">{questionsSize}</Badge>
                                            </h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={this.styles.textHeaderCenter}> 
                                            <h5>
                                                Answered Questions: 
                                            </h5>
                                        </th>
                                        <td style={this.styles.text}>
                                            <h5>
                                                <Badge variant="dark">{answersSize}</Badge>
                                            </h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={this.styles.textHeaderCenter}> 
                                            <h5>
                                                Total Score : 
                                            </h5>    
                                        </th>
                                        <td style={this.styles.text}>
                                            <h5>
                                                <Badge variant="danger">{totalResult}</Badge>
                                            </h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Card>
            </Col>
        )
    }
}

export default LeaderBoardUserCard;
