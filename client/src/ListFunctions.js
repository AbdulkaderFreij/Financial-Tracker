import axios from 'axios';


export const getTransactions=()=>{
    return axios
    .get('/api/transactions', {
        headers:{'Content-Type': 'application/json'}
    })
    .then(res=> {
        return res.data
    })
}


export const addTransaction = (start_date, end_date,type,amount,interval,category,currency)=>{
    return axios
    .post('/api/transactions', {
        start_date:start_date,
        end_date:end_date,
        type:type,
        amount:amount,
        interval:interval,
        category:category,
        currency:currency,
    },
    {
        headers:{'Content-Type': 'application/json'}
    })
    .then(res=> {
        console.log(res);
    })
}


export const deleteTransaction=id=>{
    return axios
    .delete(`/api/transactions/${id}`, {
        headers:{'Content-Type': 'application/json'}
    })
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
}


export const updateTransaction=(title,start_date, end_date,type,amount,interval,category,currency,id)=>{
    return axios
    .put(`/api/transactions/${id}`, {
        start_date:start_date,
        end_date:end_date,
        type:type,
        amount:amount,
        interval:interval,
        category:category,
        currency:currency,
    },
    {
        headers:{'Content-Type': 'application/json'}
    })
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
}