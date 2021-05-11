// import logo from './logo.svg';
// import './App.css';
import Header from "./MyComponents/header";
import Todo from "./MyComponents/TodoItmes";
import Footer from "./MyComponents/Footer";



function App() {
  return (
    <>
    <Header title ="My todos" searchbar = {false}/>
    <Todo/>
    <Footer/>
    </>
  );
}

export default App;
