import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Video from "./pages/Video";
import Root from "./pages/Root";
import VideoDetail from "./pages/VideoDetail";

const router =  createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<NotFound/>,
    children: [
      {
        index: true,
        element: <Home/>,

      },
      {
        path:"/videos",
        element: <Video/>
      },
      {
        path:'/videos/:videoId', element: <VideoDetail/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
