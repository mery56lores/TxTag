import React from "react";
import "./ExpenseList.css";


function ExpenseList({expenses}){


return (

<div className="expense-list">

<h2>Expense History</h2>


{

expenses.length===0 ?

<p>No expenses added yet.</p>


:

expenses.map((expense)=>(

<div className="expense-item" key={expense.id}>


<h3>{expense.title}</h3>


<p>
Category: {expense.category}
</p>


<p>
Amount: ${expense.amount}
</p>


</div>


))

}


</div>

);


}


export default ExpenseList;
