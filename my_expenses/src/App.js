import "./App.css";
import Counter from "./Components/Counter";
import ExpenseItem from "./Components/ExpenseItem";
import counter from "./redux/Reducer";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import InputText from "./Components/InputText";
import { useState } from "react";
import SquareConter from "./Components/SquareNumber";
import Loginpage from "./Components/Loginpage";
import AddComponent from "./Components/AddComponent";

function App() {
  const item = [
    { title: "Car", Description: "Suzuki", date: new Date() },
    { title: "Bike", Description: "Honda", date: new Date() },
  ];
  
  return (
    <Provider store={store}>
      <div className="App">
       {
         item.map((i)=>(
          <ExpenseItem title={i.title} date={i.date}></ExpenseItem>
         ))
       }
      </div>
    </Provider>
  );
}

export default App;
