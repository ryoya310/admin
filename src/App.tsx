import * as Modules from "./app/modules";

import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

// Header
import Header from "./components/templates/header";

// Public
import Login from "./views/login";
import Logout from "./views/logout";

// Private
import Index from "./views/index";
import Article from "./views/article";

export default function App() {
  return (
    <Provider store={Modules.store}>
      <Routes>
        <Route element={<Header />}>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Index />} />
          <Route path="/article" element={<Article />} />
        </Route>
      </Routes>
    </Provider>
  );
}