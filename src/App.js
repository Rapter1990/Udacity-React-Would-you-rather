import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import LoadingBar from "react-redux-loading";
import Nav from "./components/Nav"
import Dashboard from "./components/Dashboard"
import Leaderboard from "./components/Leaderboard"
import AddQuestion from "./components/AddQuestion"
import QuestionPage from "./components/QuestionPage"
import ErrorPage from "./components/ErrorPage"
import Login from "./components/Login"

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {

    return (
      <div>
        <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          <div className="container">
            {this.props.authedUser ? (
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/add" component={AddQuestion} />
                <Route
                  path="/questions/:question_id"
                  component={QuestionPage}
                />
                <Route path="/not-found" component={ErrorPage} />
              </Switch>
            ) : (
              <Login />
            )}
          </div>
        </Fragment>
      </Router>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App) 