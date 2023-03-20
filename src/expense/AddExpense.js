import React,{useState} from 'react'
import classes from "./add.module.css";

const AddExpense = (props) => {

    const defaultValue ={
        title:"",
        amount:"",
        date:""
    }
   
    const[formData,setFormData]=useState(defaultValue);

    const formSubmit=(e)=>{
        e.preventDefault();
        if(formData.title !=="" && formData.amount !=="" && formData.date !==""){
          props.onNewExpense(formData);
        }else{
          alert("all field must be required")
        }
        setFormData(defaultValue);
      }

    const onChangeHandle=(e,field)=>{
      setFormData({...formData,[field]:e.target.value})
       
    }

   


  return (
    <>
    <div className='container'>
        
        <div className=''>
        <h2 className={classes.add_title}>Add Expense</h2>
        </div>
        <div className='form w-100 mx-auto'>
            <form onSubmit={formSubmit}>
                <div className='mb-3'>
                    <input type="text" placeholder='enter title' value={formData.title} className='form-control' onChange={(e)=>onChangeHandle(e,"title")}/>
                </div>
                <div className='mb-3'>
                <input type="Number" placeholder='enter amount' value={formData.amount} className='form-control' onChange={(e)=>onChangeHandle(e,"amount")}/>
                </div>
                <div className='mb-3'>
                <input type="date" placeholder='enter date' value={formData.date} className='form-control' onChange={(e)=>onChangeHandle(e,"date")}/>
                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-success form-control'>Submit</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default AddExpense