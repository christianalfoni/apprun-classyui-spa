import app from "apprun";
import { NavBar, NavItem } from "./navbar";

// Removing and adding "active" class on <li> elements in the NavBar.
// The reason for this solution is that the App function below will only be called once.
app.on("//", (route) => {
  const menus = document.querySelectorAll("#top-nav li");
  for (let i = 0; i < menus.length; ++i) menus[i].classList.remove("active");
  const item = document.querySelector(`[href="${route}"]`);
  item && item.parentElement.classList.add("active");
})

const App = () => <div class="container">
  <NavBar id="top-nav" label="BrandX">
    <NavItem label="AppRun" href="#AppRun" active />
    <NavItem label="Classy-UI" href="#Classy-UI" />
    <NavItem label="About" href="#About" />
  </NavBar>
  <div class="container" id="my-app"></div>
</div>

app.render(document.getElementById("main"), <App />);

import AppRunInfo from "./AppRunInfo";
import ClassyUiInfo from "./ClassyUiInfo";
import About from "./About";

const element = "my-app";

new AppRunInfo().start(element);
new ClassyUiInfo().mount(element);
new About().mount(element);