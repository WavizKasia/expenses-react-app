import React, { useState } from 'react'
import AddExpense from './AddExpense'
import ExpenseList from './ExpenseList'
import classes from "./add.module.css";


const Expense = () => {

const NotExpense=()=>{
    return(
    <>
    <div className='w-100'>
    <h1 className='text-center'>  No Expenses Here</h1>
    </div>
    
    </>
    )
}
const[showAdd,setShowAdd]=useState(false);
const[closeAdd,setCloseAdd]=useState(false);
const [newData,setNewData]=useState([]);
const[amount ,setAmount]=useState(0)

const addExpense=(action)=>{
    setCloseAdd(action);
    setShowAdd(action);

}


const newExpense=(data)=>{
    setNewData([...newData,data])
    setAmount(amount+ Number(data.amount));
   
}

const removeData=()=>{
    setNewData([])
    setAmount(0);
}


 return (
    <>

<div className='container-fluid'>
    <div className='row'>
      <div className='col-md-5'>
      <div className={classes.add_button}>
        <div className=''>
        {
            closeAdd ? <button onClick={()=>addExpense(false)} className="btn btn-warning px-4">close</button>:""
        }
        
        </div>
        
        {
            showAdd ? <AddExpense  onNewExpense={newExpense}/>:<button className='btn btn-success' onClick={()=>addExpense(true)}>Add Item</button>
        }
        
     </div>
      </div>
        <div className='col-md-7'>
        {
        newData.length ===0?"":<div className='mx-auto w-75 d-flex '>
        <button className='btn btn-warning form-control' onClick={removeData}>Clear All</button>
        <button className='btn btn-secondary form-control mx-2' style={{fontSize:"20px", fontWeight:"bold"}}> Total Expenses card : {newData.length}</button>
        <button className='btn btn-secondary form-control mx-2' style={{fontSize:"20px", fontWeight:"bold"}}> Total Expenses card : {amount}</button>
        
     </div>
     }

    
    {
     newData.length === 0 ? <NotExpense/>:newData.map((data,i)=>{return (<>
     <ExpenseList key={i} expense={data} />
     </>) })
    }
    

        </div>
    </div>
</div>


 
    </>
  )
}

export default Expense