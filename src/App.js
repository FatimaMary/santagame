import CopyInvitation from './Components/CopyInvitation/CopyInvitation';
import GroupCreate from './Components/GroupCreatePage/GroupCreate';
import Invitation from './Components/Invitation/Invitation';
import Login from './Components/Login/Login';
import MessageToOrganiser from './Components/MessageToOrganiser/MessageToOrganiser';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='groupcreate' element={<GroupCreate/>} />
          <Route path='message' element={<MessageToOrganiser/>} />
          <Route path='invitation' element={<Invitation/>} />
          <Route path='copyinvitation' element={<CopyInvitation/>} />
          <Route path='register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
