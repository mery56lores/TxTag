import React,{useState} from "react";
import "./ExpenseForm.css";


function ExpenseForm({addExpense}){


const [expense,setExpense]=useState({

title:"",
amount:"",
category:""

});


const handleChange=(event)=>{

setExpense({

...expense,

[event.target.name]:event.target.value

});

};


const submitHandler=(event)=>{

event.preventDefault();


if(expense.title && expense.amount){

addExpense(expense);


setExpense({

title:"",
amount:"",
category:""

});

}

};


return (

<form className="expense-form" onSubmit={submitHandler}>


<h2>Add Expense</h2>


<input

type="text"

name="title"

placeholder="Expense Name"

value={expense.title}

onChange={handleChange}

/>



<input

type="number"

name="amount"

placeholder="Amount"

value={expense.amount}

onChange={handleChange}

/>



<input

type="text"

name="category"

placeholder="Category"

value={expense.category}

onChange={handleChange}

/>


<button>

Add Transaction

</button>


</form>

);


}


export default ExpenseForm;
