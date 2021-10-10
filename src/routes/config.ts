import HomePage from "../pages/HomePage";
import Booth1 from "../pages/Booth1";
import Booth2 from "../pages/Booth2";

const routes: any = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/booth",
    component: Booth1,
  },
  {
    path: "/booth2",
    component: Booth2,
  },
];

export default routes;
