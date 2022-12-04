import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecordsBlog } from "./Blog/BlogReduxAction";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
function App() {
  const callReduxReducer = useDispatch();
  const getMessage = useSelector((state) => state.blog);
  useEffect(() => {
    callReduxReducer(getRecordsBlog());
  }, []);
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + Flask Tutorial</p>
        <div>
          {getMessage.length !== 0 ? (
            <h3>{getMessage[0]?.id}</h3>
          ) : (
            <h3>LOADING</h3>
          )}
        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
