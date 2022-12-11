import { render } from "solid-js/web";

import "./index.scss";

const App = () => (
  <div
    class="mt-10 text-3xl mx-auto max-w-6xl"
    style="background-color: lightyellow"
  >
    <div>Name: <strong>host</strong></div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
render(App, document.getElementById("app"));
