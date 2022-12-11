import { render } from "solid-js/web";

import "./index.scss";

import Counter from './Conter'

const App = () => (
  <div
    class="mt-10 text-3xl mx-auto max-w-6xl"
    style="background-color: lightblue"
  >
    <div>Name: <strong>remote</strong></div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>

    <Counter />
  </div>
);

render(App, document.getElementById("app"));
