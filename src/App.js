import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";




function App() {

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://api.nasa.gov/planetary/apod")
        .then(res => {
          console.log(res);
          // setData(res.data);
        });
        // .catch(err => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {/* <img src={data} alt="placeholder text" /> */}
    </div>
  );
}

export default App;
