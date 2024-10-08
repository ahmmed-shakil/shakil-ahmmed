/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import "./index.css";
import CustomCursor from "./components/shared/CustomCursor";

function AppLayout({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

function RouteWrapper({ element, pageProps }) {
  // Pass `pageProps` to `AppLayout` and render the element
  return <AppLayout Component={element.type} pageProps={pageProps} />;
}

function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        {routes.map(({ path, element, pageProps }) => (
          <Route
            key={path}
            path={path}
            element={<RouteWrapper element={element} pageProps={pageProps} />}
            // loader={routes}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
