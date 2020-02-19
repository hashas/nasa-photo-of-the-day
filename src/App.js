import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Photo from "./PhotoSection/Photo";
import Header from "./HeaderSection/Header";
import Explainer from "./ExplainerSection/Explainer"

import styled from 'styled-components';

const WrapperDiv = styled.div`
  text-align: center;
  // width: 700px;
  margin: 0px auto;
  font-family: 'Roboto mono', monospace;
`;

function App() {

  const [data, setData] = useState();
  // const [error, setError] = useState();
  const [explainer, setExplainer] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
          console.log(res);
          setData(res.data.hdurl);
          setExplainer(res.data.explanation);
          setTitle(res.data.title);
        });
    };

    fetchData();
  }, []);

  return (
    <WrapperDiv>
      <Header titleData={title}/>
      <Photo imgData={data}/>
      <Explainer explainerData={explainer}/>
    </WrapperDiv>
  );
}

export default App;
