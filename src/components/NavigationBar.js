import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import wouldyourather from '../images/wouldyourather.png'
import { logoutUser } from '../actions/authedUser';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";

class NavigationBar extends Component {
    render() {

        const { authedUser, authedUserName } = this.props;

        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="/">
                    <img
                        alt="logo"
                        src={wouldyourather}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Would You Rather
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/add">New Question</Nav.Link>
                        <Nav.Link as={Link} to="/leaderboard">Leader Board</Nav.Link>
                            <Navbar.Text className="ml-md-4">
                                <small>{`Hi ${authedUserName}!`}</small>
                                {' | '}
                                <Link
                                    to='/login'
                                    onClick={() => this.props.dispatch(logoutUser(authedUser))}
                                >
                                    Logout
                                </Link>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>    
                </Navbar>
            </>
        )
    }
}

const mapStateToProps = ({ users, authedUser }) => ({
    authedUser,
    authedUserName: users[authedUser].name,
});

export default connect(mapStateToProps)(NavigationBar);
