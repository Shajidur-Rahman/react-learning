// import logo from './logo.svg';
// import './App.css';
import Header from "./MyComponents/header";
import Todo from "./MyComponents/Todos";
import TodoItems from "./MyComponents/TodoItmes";
import Footer from "./MyComponents/Footer";



function App() {

  let todo = [
    {
      sno: 1,
      title: 'go to the market',
      des: 'you need to bye some thing'
    },
    {
      sno: 2,
      title: 'go to the market',
      des: 'you need to bye some thing'
    },
    {
      sno: 3,
      title: 'go to the market',
      des: 'you need to bye some thing'
    }
  ]
  return (
    <>
    <Header />
    <Todo todo = {todo}/>
    <Footer/>
    </>
  );
}

export default App;
