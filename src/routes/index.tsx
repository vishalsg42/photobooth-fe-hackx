import { Route, Switch } from "react-router-dom";
import routes from "./config";

const Routes = () => {
  return (
    <Switch>
      {routes.map((e: any, key: number) => (
        <Route exact {...e} key={key} />
      ))}
    </Switch>
  );
};

export default Routes;
