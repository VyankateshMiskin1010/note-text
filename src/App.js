// App.js
import React from "react";
import "./App.css"; // You can add your custom styles here
import MyNavbar from "./MyNavbar";
import Card from "./Card";
import Box from "./Box";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Card />
      <Box />
      {/* Add the rest of your application content here */}
    </div>
  );
}

export default App;
