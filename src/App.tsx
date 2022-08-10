import * as Modules from "./common/modules";

import { Provider } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

// Layout
import Layout from "./components/templates/layout";

// Public
import Login from "./views/login";
import Logout from "./views/logout";

// Private
import Index from "./views/index";
import Article from "./views/article";
import Schedule from "./views/schedule";

export default function App() {

  return (
    <Modules.ConstantsProvider>
      <Provider store={Modules.store}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Index />} />
            <Route path="/article" element={<Article />} />
            <Route path="/schedule" element={<Schedule />} />
          </Route>
        </Routes>
      </Provider>
    </Modules.ConstantsProvider>
  );
}