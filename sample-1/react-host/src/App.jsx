import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import counterWrapper from "remote/counterWrapper";

import "./index.scss";

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    counterWrapper(divRef.current)
  }, [])

  return (
    <div
      className="mt-10 text-3xl mx-auto max-w-6xl"
      style={{ backgroundColor: 'lightblue', padding: '16px' }}
    >
      <div>Name: <strong>react-host</strong></div>
      <div >Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>

      <div ref={divRef} />
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
