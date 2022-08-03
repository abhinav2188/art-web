import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Portal from './pages/portal';
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <div className="flex">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='' element={<Portal />} />
              <Route path='login' element={<Login />}></Route>
              <Route path='register' element={<Register />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
