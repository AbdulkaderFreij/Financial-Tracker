import React, { Component } from 'react'
import TransactionsTable from '../../Components/TransactionsTable/TransactionsTable';
import { Table } from 'semantic-ui-react'
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
          editingIndex: -1
        }
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
    
      addTransaction(input) {
        let newList = this.state.list;
        newList.push(input);
            this.setState({ list: newList, date: "", type: "", amount: "", currency: "" });
      }

      deleteTransaction(id) {
        let arr = this.state.list;
        const result = arr.filter(transaction => transaction.id !== id);
        this.setState({ list: result });
      }

      editTransaction = id => {
        const transaction = this.state.list.find(transaction => transaction.id === id);
        this.setState({
          editing: true,
          date: transaction.date,
          type: transaction.type,
          amount: transaction.amount,
          currency: transaction.currency,
          editingIndex: id
        });
      };
      updateTransaction = async () => {
        this.setState({
          list: this.state.list.map(transaction =>
            transaction.id === this.state.editingIndex
              ? { ...transaction, date: this.state.date, type:this.state.type, amount:this.state.amount, currency:this.state.currency }
              : transaction
          ),
          editing: false,
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
        <form onSubmit={event => {event.preventDefault();}}>
          <input type = "date" value={this.state.date} onChange={e => this.date(e)} />
          <input type = "text" value = {this.state.type} onChange = {e => this.type(e)} />
          <input type = "number" value = {this.state.amount} onChange = {e => this.amount(e)} />
          <input type = "text" value = {this.state.currency} onChange = {e => this.currency(e)} />
          {/*to switch between Add and Update*/}
          <input type = "submit" value = {this.state.editing ? "Update" : "Add"} onClick={
              this.state.editing ? e => this.updateTransaction() : e => this.addTransaction()
            }/>
        </form>  <div className="container__table"> 
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
