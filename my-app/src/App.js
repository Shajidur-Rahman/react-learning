// import logo from './logo.svg';
// import './App.css';
import Header from "./MyComponents/header";
import { Todos } from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState } from 'react';




function App() {
  const ondelet = (todo)=>{
    console.log('i am ondelet of ', todo);
    let index = todos.indexOf(todo)
    todo.splice(index, 1)
  }

  let todos = [
    {
      sn: 1,
      title:'go to the market',
      des: 'you need to go to the market'
    },
    {
      sn: 2,
      title:'go to the collage',
      des: 'you need to go to the collage'
    },
    {
      sn: 3,
      title:'go to the school',
      des: 'you need to go to the school'
    }
  ]

  return (
    <>
    <Header />
    <Todos todos={todos} ondelet={ondelet} />
    <Footer/>
    </>
  );
}

export default App;
