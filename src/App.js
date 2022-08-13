import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Portal from './pages/portal';
import UserProvider from "./context/UserProvider";
import UsersPanel from './pages/portal/usersPanel';
import DropdownsPanel from './pages/portal/dropdown/dropdownPanel';
import DealsPanel from './pages/portal/dealsPanel';
import PartyPanel from './pages/portal/partyPanel';
import { AxiosInterceptor } from './axiosInstance';
import Forbidden from './pages/portal/forbidden';
import Brochures from './pages/portal/brochures/Brochures';


function App() {
  return (
    <div className="flex">
      <UserProvider>
        <AxiosInterceptor>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}>
                <Route path='portal/' element={<Portal />} >
                  <Route path='users' element={<UsersPanel />}></Route>
                  <Route path='deals' element={<DealsPanel />}></Route>
                  <Route path='dropdowns' element={<DropdownsPanel />}></Route>
                  <Route path='party' element={<PartyPanel />} />
                  <Route path='brochures' element={<Brochures />} />
                  <Route path='forbidden' element={<Forbidden />}></Route>
                </Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </AxiosInterceptor>
      </UserProvider>
    </div>
  );
}

export default App;
