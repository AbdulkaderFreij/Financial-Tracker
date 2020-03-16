import React, { Component, createRef } from 'react'
import TransactionsTable from '../../Components/TransactionsTable/TransactionsTable';
import { Table } from 'semantic-ui-react'
import { Button, Popup} from 'semantic-ui-react'

import './Transactions.css';
export default class Transactions extends Component {
    constructor(props){
        super(props);
        this.state = {
          list: [],
          date: '',
          type:'',
          amount:'',
          currency:'',
          editing: false,
          editingIndex: -1,
          isOpen: false
        }
      }

      contextRef = createRef()

      handleOpen = () => {
        this.setState({ isOpen: true })
      }
    
      handleClose = () => {
      this.setState({ isOpen: false })
      }
    
       date = e => {
        e.preventDefault();
        this.setState({ date: e.target.value });
      };
      type = e => {
        e.preventDefault();
        this.setState({ type: e.target.value });
      };
      amount = e => {
        e.preventDefault();
        this.setState({ amount: e.target.value });
      };
      currency = e => {
        e.preventDefault();
        this.setState({ currency: e.target.value });
      };
    
      addTransaction() {
        let newList = this.state.list;
        const input = {
          id:this.state.id,
          date: this.state.date,
          type:this.state.type,
          amount:this.state.amount,
          currency:this.state.currency
        }
        newList.push(input);
            this.setState({ list: newList, isOpen:false, date: "", type: "", amount: "", currency: "" });
      }

deleteTransaction=(id)=> {
        console.log(id);
        let arr = this.state.list;
        const result = arr.filter((transaction, index) => index !== id);
        this.setState({ list: result });
      }

      editTransaction = id => {
        const transaction = this.state.list.find((transaction,index) => index === id);
        console.log(id);
        
        this.setState({
          editing: true,
          isOpen:true,
          date: transaction.date,
          type: transaction.type,
          amount: transaction.amount,
          currency: transaction.currency,
          editingIndex: id
        });
      };
      updateTransaction = () => {
        this.setState({
          list: this.state.list.map((transaction,index) =>
            index === this.state.editingIndex
              ? { ...transaction, date: this.state.date, type:this.state.type, amount:this.state.amount, currency:this.state.currency }
              : transaction
          ),
          editing: false,
          isOpen:false,
          date: "",
          type: "",
          amount: "",
          currency: ""
        });
        
      };

    render() {
        return (
            
            <div>
                <h1>Transaction</h1>
            <React.Fragment>
          <Popup
            trigger={<Button content='Add Transaction' />}
            context={this.contextRef}
            content={<form onSubmit={event => {event.preventDefault();}}>
            <input type = "date" value={this.state.date} onChange={e => this.date(e)} />
            <input type = "text" value = {this.state.type} onChange = {e => this.type(e)} />
            <input type = "number" value = {this.state.amount} onChange = {e => this.amount(e)} />
            <input type = "text" value = {this.state.currency} onChange = {e => this.currency(e)} />
            {/*to switch between Add and Update*/}
            <input type = "submit" value = {this.state.editing ? "Update" : "Add"} onClick={
                this.state.editing ? e => this.updateTransaction() && this.handleClose : e => this.addTransaction() && this.handleClose
              }/>
          </form> }
            on='click'
            open={this.state.isOpen}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            position='top center'
          />        ---------------------------->
          <strong ref={this.contextRef}>here</strong>
      </React.Fragment>
         <div className="container__table"> 
        <Table celled selectable size="small" collapsing={true} fixed={true}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>No.</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Currency</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
        {this.state.list.map((transaction, index) => 
          <TransactionsTable 
            key = {index}
            id = {index}
            value = {transaction} 
            deleteTransaction = {this.deleteTransaction} 
            editTransaction = {this.editTransaction}
          />
        )}
               </Table>
               </div>
            </div>
        )
    }
}
