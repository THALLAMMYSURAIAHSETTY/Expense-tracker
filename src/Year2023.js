import React,{useState} from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';


export default function Year2023() {

  let [ExpTitle, setExpTitle] = useState([
    // {
    // },
  ])

  function handleinputs(e)
  {
    // let i = ExpTitle.length-1
    // let key=e.target.name
    // setExpTitle([...ExpTitle , ExpTitle[i][key]=e.target.value])
 

  }

  function addExpense()
  {
    setExpTitle([...ExpTitle,{
      title : "",
      amount : "",
      date : ""
    }])

  }

  function removeExpense(index)
  {
    let temp = [...ExpTitle]
    temp.splice(index,1)
    setExpTitle(temp)
    console.log(index)

  }

  

  return (

    <div>
      <br/>
      <h3>2023</h3>
      <br/>
      <div>
      {ExpTitle.map((ele,index)=>{
      return(
        <div class="divflex" key={index}>
          <span>{ele.title}</span>
          <span>{ele.amount}</span>
          <span>{ele.date}</span>
          {ExpTitle.length > 0 ? <button onClick={()=>removeExpense(index)}>Remove</button> : ''}
          
        </div>
      )
      })}

      <br/>
      </div>

      <div class="divflex">
      <input type="text" name="title" placeholder="Title" onChange={handleinputs}/>
      <input type="Number" name="amount" placeholder="Price" onChange={handleinputs}/>
      <input type="date" name="date" placeholder="Date" onChange={handleinputs}/>
      <button onClick={addExpense}>Add</button>
      </div>

    </div>
  );
}
