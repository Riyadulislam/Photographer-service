import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router/Routes';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
     
  <RouterProvider router={router}></RouterProvider>
  <ToastContainer />
    </div>
  );
}

export default App;
