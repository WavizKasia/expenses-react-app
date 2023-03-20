import React from 'react'
import moment from 'moment';
import "./Expense.css";
import classes from "./add.module.css";




const ExpenseDate = ({date}) => {

  return (
      <div className={classes.expense_date}>
          <span> {moment(new Date(date)).format('MMMM')} </span>
          <span>{moment(new Date(date)).format('DD')}</span>
          <span className='expense_item_date_day'>{moment(new Date(date)).format('YYYY')}</span>
      </div>
  )
}

const ExpenseList = ({expense}) => {
  
  return (
    <>
    
    <div className={classes.main_expense} style={{marginTop:"5px" , backgroundColor: expense.amount > 500 ? "blue":""}}>
        <ExpenseDate date={expense.date}/>
        <div className={classes.expense_title}>expense for :{expense.title}</div>
        <div className={classes.expense_amount} style={{backgroundColor: expense.amount > 100?"yellow":"green"}}>{expense.amount}$</div>
    </div>
    </>
  )
}

export default ExpenseList;