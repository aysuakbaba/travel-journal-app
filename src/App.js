import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import data from './data'

const cards = data.map((item) => {
  return(
    <Card
      key = {item.id}
      {...item}
    />

  )
  
})


function App() {
  return (
    <div className="App">
      <Navbar/>
      {cards}

      
    </div>
  );
}

export default App;
