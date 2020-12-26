import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
                  <Route exact path="/" component={() => <Dashboard authedUser={authedUser} questions={questions} />} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route path="/add" component={AddQuestion} />
                  <Route
                    path="/questions/:question_id"
                    render={({ match }) => (
                      <QuestionPage id={match.params.question_id} />
                    )}
                    component={QuestionPage}
                  />
                  <Route path="/not-found" component={ErrorPage} />
                </Switch>
              </>
            ) : (
              <Route component={() => <Login users={users} />}/> 
            )}
        </Fragment>
      </Router>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser ? authedUser : null,
    authedUser
  }
}

export default connect(mapStateToProps)(App) 