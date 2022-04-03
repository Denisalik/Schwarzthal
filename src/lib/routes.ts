import { PathStrings } from "./urls";
import Statistics from "../components/Statistics";
import History from "../components/History";
import Search from "../components/Search";

export const routes = [
  {
    name: "Search",
    path: PathStrings.SEARCH,
    element: Search,
  },
  {
    name: "History",
    path: PathStrings.HISTORY,
    element: History,
  },
  {
    name: "Statistics",
    path: PathStrings.STATISTICS,
    element: Statistics,
  },
];
