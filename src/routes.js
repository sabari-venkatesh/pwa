import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about/portfolio",
        component: Portfolio
      },
      {
        path: "/about/contact",
        component: Contact
      }
    ]
  }
];

export default routes;
