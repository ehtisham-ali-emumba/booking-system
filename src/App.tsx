import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";

const AppRoutes = () => {
  return useRoutes(routes);
};

function MainApp() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default MainApp;
