import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'

const TransactionsTable = (props) => (

  <Table celled selectable size="small">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>No.</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Currency</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{props.id}  <Button icon floated="right" onClick={() => props.editTransaction(props.value.id)}>
    <Icon name='edit' />
  </Button> <Button icon floated="right" onClick={() => props.deleteTransaction(props.value.id)}>
    <Icon name='delete' />
  </Button></Table.Cell>
        <Table.Cell>{props.value.date}</Table.Cell>
        <Table.Cell>{props.value.type}</Table.Cell>
        <Table.Cell>{props.value.amount}</Table.Cell>
        <Table.Cell>{props.value.currency}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TransactionsTable;
