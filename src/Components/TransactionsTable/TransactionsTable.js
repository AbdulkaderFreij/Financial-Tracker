import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import {  List } from 'semantic-ui-react'


const TransactionsTable = (props) => (
  <>
 <List horizontal>
    <List.Item>{props.id} </List.Item>
    <List.Item>{props.value.date}</List.Item>
    <List.Item>{props.value.type}</List.Item>
    <List.Item>{props.value.type === "income"? "<--" : "-->" }</List.Item>
    <List.Item>{props.value.category}</List.Item>
    <List.Item>{props.value.type === "income"? "+" : "-"  &&props.value.amount}</List.Item>
    <List.Item>{props.value.currency}</List.Item>
    <List.Item><Button  icon floated="right" onClick={() => props.editTransaction(props.id)}> <Icon name='edit'/></Button></List.Item>
    <List.Item><Button  icon floated="right" onClick={() => props.deleteTransaction(props.id)}> <Icon name='delete'/></Button></List.Item>
  </List>
 </>
)

export default TransactionsTable;
