import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { DefaultLayout } from "./layouts";

// import { Home } from "./views/home";
import { Board } from "./views/board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />, // Sử dụng layout để dễ dàng mở rộng project
    children: [
      {
        element: <Board />,
        index: true,
      },
      // {
      //   element: <Home />,
      //   index: true,
      // },
      // {
      //   path: "board",
      //   element: <Board />,
      // },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />; // Sử dụng cấu hình routes và data routers được giới thiệu từ phiên bản v6.4.0
};

export default App;
