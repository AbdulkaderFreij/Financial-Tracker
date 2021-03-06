import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

export default function GoalsTable(props) {
    return (
        <div>
             <Grid columns={7}>
    <Grid.Column>{props.id}</Grid.Column>
    <Grid.Column>{props.value.date}</Grid.Column>
    <Grid.Column>{props.value.category}</Grid.Column>
    <Grid.Column>{props.value.currency}</Grid.Column>
    <Grid.Column><Button  icon floated="right" onClick={() => props.editGoal(props.id)}> <Icon name='edit'/></Button> <Button  icon floated="right" onClick={() => props.deleteGoal(props.id)}> <Icon name='delete'/></Button></Grid.Column>
  </Grid>
        </div>
    )
}
