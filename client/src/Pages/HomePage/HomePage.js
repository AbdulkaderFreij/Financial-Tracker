import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'


const VerticalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
      as={Menu}
      animation={animation}
      direction={direction}
      icon='labeled'
      inverted
      vertical
      visible={visible}
      width='thin'
    >
    </Sidebar>
  )
  
  VerticalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
  }
export default class HomePage extends Component {

    render() {
        return (
            <div>
                 <Sidebar.Pushable as={Segment}>
          
          <VerticalSidebar
            direction={'left'}
            visible={true}
          />
        <Sidebar.Pusher dimmed={false}>
          <Segment basic>
            <h1>Welcome to $ Financial Tracker</h1>
            <h2>Simple money tracker</h2>
            <p>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
            <h2>Set Your Goals Easily</h2>
            <p>Set goals that are easy to stick to, based on your own spending habits. You’re one step closer to that stuff you want to buy.</p>
            <h2>The whole picture in one place</h2>
            <p>One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.</p>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
            </div>
        )
    }
}
