import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from './components/getproduct/Product';
import Add from './components/addproduct/AddP';
import Edit from './components/updateproduct/edit';


function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Product/>,
    },
    {
      path: "/add",
      element: <Add/>,
    },
    {
      path: "/edit/:id",
      element: <Edit/>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;