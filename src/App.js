// App.js
import React from "react";
import "./App.css"; // You can add your custom styles here
import MyNavbar from "./Components/MyNavbar";
// import Form from "./Components/Form";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <div className="App">
      <MyNavbar title="Text_Note" />
      {/* <Form heading="Enter Text Below" /> */}
      <AboutUs />
    </div>
  );
}

export default App;
