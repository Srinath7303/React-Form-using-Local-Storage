
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import UserProfile from './pages/UserProfile';
import User from './pages/User';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return ( 
    <div> 
       <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

         <BrowserRouter>
         <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/profile' element={<UserProfile/>}/>
            <Route path='/users' element={<User/>}/>
         </Routes>
         
         </BrowserRouter>
    </div>
  );
}

export default App;
