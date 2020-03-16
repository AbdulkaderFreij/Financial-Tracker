import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'

const TransactionsTable = (props) => (
    <Table.Body>
      <Table.Row>
        <Table.Cell>{props.id}  <Button id={props.id} icon floated="right" onClick={() => props.editTransaction(props.value.id)}>
    <Icon name='edit' />
  </Button> <Button id={props.id} icon floated="right" onClick={() => props.deleteTransaction(props.value.id)}>
    <Icon name='delete' />
  </Button></Table.Cell>
        <Table.Cell>{props.value.date}</Table.Cell>
        <Table.Cell>{props.value.type}</Table.Cell>
        <Table.Cell>{props.value.amount}</Table.Cell>
        <Table.Cell>{props.value.currency}</Table.Cell>
      </Table.Row>
    </Table.Body>
 
)

export default TransactionsTable;
