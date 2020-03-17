import React from 'react'



const TotalAmount = (props) => (
  <>
    {props.value.type === "Fixed Income" || props.value.type === "Recurring Income" ? `+ ${Number(props.value.amount)+Number(props.value.amount)}` :null }
 </>
)

export default TotalAmount;
