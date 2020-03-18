import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppMenu from "./Components/Menu/AppMenu";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from './Pages/SignUp/SignUp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({
      loggedIn: true
    });
  };

  handleLogout = () => {
    this.setState({
      loggedIn: false
    });
  };

  render() {
    const { loggedIn } = this.state;
    const { handleLogin, handleLogout } = this;
    return (
      <Router>
        <div className="App">
          <AppMenu
            loggedIn={loggedIn}
            handleLogin={handleLogin}
            handleLogout={handleLogout}/>
          <Switch>
            <Route path="/home" exact component={HomePage}/>
            <Route path="/signin" exact component={SignIn}/>
            <Route path="/signup" exact component={SignUp}/>
            {loggedIn ? <SignIn/> : <HomePage />}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
