import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Header from './components/Header';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      axios
        .get("https://reqres.in/api/users?page=1")
        .then((res) => {
          //console.log(res.data.data);
          setData(res.data.data);
        })
        .catch((error) => {
          console.log(error.message);
        })
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <Main dataProp={data}></Main>
    </div>
  );
}

export default App;
