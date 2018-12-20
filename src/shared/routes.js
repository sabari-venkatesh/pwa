import { fetchPopularRepos } from "./api";
import Home from "../components/home";
import Grid from "../components/grid";

const routes = [
  {
    component: Home,
    exact: true,
    path: "/"
  },
  {
    path: '/popular/:id',
    component: Grid,
    init: (path = "") => fetchPopularRepos(
      path.split("/").pop()
    )
  }
];

export default routes;
