import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect  } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import LoadingBar from "react-redux-loading";
import NavigationBar from "./components/NavigationBar"
import Dashboard from "./components/Dashboard"
import Leaderboard from "./components/Leaderboard"
import AddQuestion from "./components/AddQuestion"
import QuestionPage from "./components/QuestionPage"
import ErrorPage from "./components/ErrorPage"
import Login from "./components/Login"
import QuestionResult from "./components/QuestionResult"

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {

    const { authedUser, questions, users } = this.props;

    return (
      <div>
        <Router>
        <Fragment>
          <LoadingBar />
            {authedUser ? (
              <>
                <NavigationBar authedUser={authedUser} />
                <Switch>
                  <Route exact path="/" component={() => <Dashboard authedUser={users[authedUser]} questions={questions} />} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route path="/add" component={AddQuestion} />
                  <Route
                    path="/questions/:question_id"
                    render={({ match }) => (
                      <QuestionPage id={match.params.question_id} />
                    )}
                  />
                  <Route
                    path="/questions/:question_id/view"
                    render={({ match }) => (
                      <QuestionResult id={match.params.question_id} />
                    )}
                  />
                  <Route path="/not-found" component={ErrorPage} />
                </Switch>
              </>
            ) : (
              <>
                <Redirect to="/login"/>
                <Route path="/login" component={() => <Login users={users} />}/> 
              </>
            )}
        </Fragment>
      </Router>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    loading: authedUser ? authedUser : null,
    authedUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(App) 