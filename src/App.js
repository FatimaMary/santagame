import CopyInvitation from './Components/CopyInvitation/CopyInvitation';
import GroupCreate from './Components/GroupCreatePage/GroupCreate';
import Invitation from './Components/Invitation/Invitation';
import Login from './Components/Login/Login';
import MessageToOrganiser from './Components/MessageToOrganiser/MessageToOrganiser';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import Reset from './Components/Login/Reset';
import GiftExchangePage1 from './Components/GiftExchangePages/GiftExchangePage1';
import GiftExchangePage2 from './Components/GiftExchangePages/GiftExchangePage2';
import GiftExchangePage3 from './Components/GiftExchangePages/GiftExchangePage3';

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
          <Route path='reset' element={<Reset/>}/>
          <Route path='giftexchange1' element={<GiftExchangePage1/>} />
          <Route path='giftexchange2' element={<GiftExchangePage2/>} />
          <Route path='giftexchange3' element={<GiftExchangePage3/>}/>
          {/* <Route/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
