import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppMenu from "./Components/Menu/AppMenu";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Reports from "./Pages/Reports/Reports";
import Goals from "./Pages/Goals/Goals";
import Transactions from "./Pages/Transactions/Transactions";
import AppSettings from "./Pages/AppSettings/AppSettings";
import HomePage from "./Pages/HomePage/HomePage";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from './Pages/SignUp/SignUp';
import SideBar from './Components/SideBar/SideBar';

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
  {this.state.loggedIn ? (<SideBar app_routes={<AppRoutes/>}/>):null}
          <Switch>
            <Route path="/" exact render={(props)=>loggedIn ?<SideBar app_routes={<AppRoutes/>}/> : <HomePage />}/>
            <Route path="/signin" exact render={(props)=><SignIn handleLogin={this.handleLogin} {...props}/>}/>
            <Route path="/signup" exact component={SignUp}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const AppRoutes = () => {
  return (
    <>
    <Switch>
      <Route path="/" strict exact component={Dashboard} />
      <Route path="/reports" component={Reports} />
      <Route path="/goals" component={Goals} />
      <Route path="/transactions" component={Transactions} />
      <Route path="/settings" component={AppSettings} />
      </Switch>
    </>
  );
};
export default App;
