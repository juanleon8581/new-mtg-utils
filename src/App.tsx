import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./generic/ErrorPage/ErrorPage";
import { routerStrings } from "./generic/globalStrings";
import { Root } from "./Root";
import { TimerPage, WelcomePage } from "./presentation/pages";

const routes = createBrowserRouter([
  {
    path: `${routerStrings.root}`,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `${routerStrings.root}`,
        element: <WelcomePage />,
      },
      {
        path: `${routerStrings.timer}`,
        element: <TimerPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
