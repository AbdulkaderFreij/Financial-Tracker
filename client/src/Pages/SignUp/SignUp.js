import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom";
const SignUp = () => (
  <Grid textAlign='center' style={{ height: '100vh', marginTop:'0px', backgroundColor:'lightblue'  }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Sign Up
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Full Name' />
          <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail Address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Button color='teal' fluid size='large'>
            Sign Up
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <Link to='/signin'>Sign In</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default SignUp;