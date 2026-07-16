import React from "react";
import "./Receipt.css";


function Receipt({expenses}){


const total = expenses.reduce(

(sum,item)=>sum + Number(item.amount),

0

);


return (

<section className="receipt">


<h2>TxTag Receipt Summary</h2>


<p>
Total Transactions: {expenses.length}
</p>


<h3>
Total Amount: ${total}
</h3>


</section>

);


}


export default Receipt;
