import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import SideBar from '../../Components/SideBar/SideBar';
import AppRoutes from '../../App';


export default class SignIn extends Component {
  constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	handleUsernameChange = e => {
		this.setState({ username: e.target.value });
	};

	handlePasswordChange = e => {
		this.setState({ password: e.target.value });
	};

	signIn =  (event) => {
		event.preventDefault();
		const { username, password } = this.state;
	
		if (username==="abd" && password==="123") {

      return (
      <>
      <SideBar app_routes={<AppRoutes/>}/>
      </>
      )
		}
		else {
			alert("Wrong username or password");
		}

	}
  render() {
    return (
      <Grid
        textAlign="center"
        style={{
          height: "100vh",
          marginTop: "0px",
          backgroundColor: "lightblue"
        }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large" onSubmit={this.signIn}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={this.handleUsernameChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.handlePasswordChange}
              />

              <Button color="teal" active fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
