import app, { Component } from "apprun";
import { ui, Aext } from "./common-ui";

export default class AboutComponent extends Component {
  state = { page: "Classy-UI" };

  view = (state) => {
    return <div class="classyuiinfo">
      <h1 class={ui.h1}>{state.page}</h1>
      <p><Aext href="https://classy-ui.io">Classy-UI</Aext> is CSS properties abstracted to design tokens. This abstraction does not only make your design consistent, but also discoverable and documented at your fingertips in the IDE, if your IDE has TypeScript Language Server support.</p>
      <p>Classy-UI is a <Aext href="https://babeljs.io">Babel</Aext>-plugin.</p>
      <p>Classy-UI was originally inspired by <Aext href="https://tailwindcss.com">Tailwindcss</Aext>.</p>
      <h2 class={ui.h2}>Some features</h2>
      <ul>
        <li>Virtually no runtime in production</li>
        <li>The application can start without a single line of CSS</li>
        <li>You completely get rid of specificity issues</li>
        <li>With an editor that has TypeScript Language Server support, you just select the tokens from the intellisense</li>
        <li>In production mode Classy-UI will shorten all the CSS classnames, group media queries and themes, creating a highly optimized bundle</li>
      </ul>
    </div>
  }

  update = {
    "#Classy-UI": state => {
      return state;
    }
  }
}
