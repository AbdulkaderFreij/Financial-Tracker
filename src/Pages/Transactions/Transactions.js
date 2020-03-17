import React, { Component } from 'react'
import TransactionsTable from '../../Components/TransactionsTable/TransactionsTable';
import { Button} from 'semantic-ui-react'
import {  List } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import { Header, Image, Modal } from 'semantic-ui-react'
import './Transactions.css';

const category = [
  { key: 'groceries', text: 'groceries', value: 'groceries' },
  { key: 'salary', text: 'salary', value: 'salary' },
  { key: 'rent', text: 'rent', value: 'rent' },
  { key: 'car loan', text: 'car loan', value: 'car loan' },
  { key: 'mobile bill', text: 'mobile bill', value: 'mobile bill' },
]

export default class Transactions extends Component {
    constructor(props){
        super(props);
        this.state = {
          list: [],
          date: '',
          type:'',
          amount:'',
          category:category,
          currency:'',
          editing: false,
          editingIndex: -1,
          isOpen: false
        }
      }

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

      handleAddition = (e, { value }) => {
        this.setState((prevState) => ({
          category: [{ text: value, value }, ...prevState.category],
        }))
      }
    
      handleChange = (e, { value }) => this.setState({ currentValue: value })
    
      addTransaction() {
        let newList = this.state.list;
        const input = {
          date: this.state.date,
          type:this.state.type,
          amount:this.state.amount,
          currency:this.state.currency,
          category:this.state.currentValue
        }
        console.log(input);
        newList.push(input);
            this.setState({ list: newList, isOpen:false, date: "", type: "", amount: "", currency: "", category:category });
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
          category: category,
          editingIndex: id
        });
      };
      updateTransaction = () => {
        this.setState({
          list: this.state.list.map((transaction,index) =>
            index === this.state.editingIndex
              ? { ...transaction, date: this.state.date, type:this.state.type, amount:this.state.amount, currency:this.state.currency, category:this.state.currentValue }
              : transaction
          ),
          editing: false,
          isOpen:false,
          date: "",
          type: "",
          amount: "",
          currency: "",
          category: category
        });
      };

    render() {
        return (
            <div>
              <div className="transaction-flex">
              <h1>Transactions</h1>
                <Modal trigger={<Button>New</Button>} centered={false}>
                <Modal.Header>Transactions</Modal.Header>
                <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Add a Transaction</Header>
        <form onSubmit={event => {event.preventDefault();}}>
              Date: <br/>
            <input type = "date" value={this.state.date} onChange={e => this.date(e)} /> 
            <br/> Type: <br/>
            <Input list='type' placeholder='Choose type...' value={this.state.type} onChange={e=>this.type(e)}/>
    <datalist id='type'>
      <option value='Fixed Income' />
      <option value='Recurring Income' />
      <option value='Fixed Expense' />
      <option value='Recurring Expense' />
    </datalist>
    <br/> Category: <br/>
            <Dropdown
        options={this.state.category}
        placeholder='Choose a Category'
        search
        selection
        fluid
        allowAdditions
        value={this.state.currentValue}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
       <br/> Amount: <br/>
            <input type = "number" value = {this.state.amount} onChange = {e => this.amount(e)} />
            <br/> Currency: <br/>
            <input type = "text" value = {this.state.currency} onChange = {e => this.currency(e)} />
            <input type = "submit" value = {this.state.editing ? "Update" : "Add"} onClick={
                this.state.editing ? e => this.updateTransaction() && this.handleClose : e => this.addTransaction() && this.handleClose
              }/>
          </form> 
      </Modal.Description>
    </Modal.Content>
  </Modal>
  </div>

         <div className="container__table"> 
    {this.state.list.map((transaction, index) => 
<List key={index}>
<List.Item>
<TransactionsTable 
            id = {index}
            value = {transaction} 
            deleteTransaction = {this.deleteTransaction} 
            editTransaction = {this.editTransaction}
          />
      </List.Item>
        </List>)}
               </div>
            </div>
        )
    }
}
