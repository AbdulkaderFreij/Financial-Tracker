import PropTypes from 'prop-types'
import React from 'react'
import {Link} from "react-router-dom";
import {
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

import './SideBar.css';

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
    <Menu.Item as={Link} to="/">
      <Icon name='home' />
      Dashboard
    </Menu.Item>
    <Menu.Item as={Link} to="/transactions">
      <Icon name='exchange' />
      Transactions
    </Menu.Item>
    <Menu.Item as={Link} to="/goals">
      <Icon name='chess board' />
      Goals
    </Menu.Item>
    <Menu.Item as={Link} to="/reports">
      <Icon name='pie chart' />
      Reports
    </Menu.Item>
    <Menu.Item as={Link} to="/settings">
      <Icon name='setting' />
      Settings
    </Menu.Item>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}
const SideBar = (props) => {

  return (
    <div>
        <Sidebar.Pushable as={Segment}>
          
            <VerticalSidebar
              direction={'left'}
              visible={true}
            />
          <Sidebar.Pusher dimmed={false}>
            <Segment basic>
              {props.app_routes}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
  )
}

export default SideBar;