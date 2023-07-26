import React, { Fragment } from "react";
import Weather from "./components/weather/Weather";
import Hobbies from "./components/hobbies/Hobbies";

function App() {
  return (
    <Fragment>
      <Weather />
      <Hobbies />
    </Fragment>
  );
}

export default App;
