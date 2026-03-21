import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import TodoItem from './MyComponents/TodoItem';

function App() {
  let todos = [
    {
      sno:1,
      title: "Go to the market",
      desc: "You need to go to the market to buy food"

    },
    {
      sno:2,
      title: "Go to the shopping mall",
      desc: "You need to go to the shopping mall to buy clothes"

    },
    {
      sno:3,
      title: "Go to the library",
      desc: "You need to go to the library to borrow books"

    },
  ]
  return (
    <>
    <Header title="My Todos List" searchBar={true}/>
    <Todos todos={todos}/>
    <Footer/>
    
    </>
);
}

export default App;
