import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";




function App() {

  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
          console.log(res);
          setData(res.data.hdurl);

        });
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <img src={data} alt="placeholder text" />
    </div>
  );
}

export default App;
