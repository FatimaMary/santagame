import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './scenes/login';
import GroupCreate from './scenes/groupcreatepage';
import MessageToOrganiser from './scenes/messagetoorganiser';
import Invitation from './scenes/invitation';
import CopyInvitation from './scenes/copyinvitation';
import Register from './scenes/register';
import Reset from './scenes/reset';
import GiftExchangePage1 from './scenes/giftexchangepage1';
import GiftExchangePage2 from './scenes/giftexchangepage2';
import GiftExchangePage3 from './scenes/giftexchangepage3';
import GiftExchangePage4 from './scenes/giftexchangepage4';
import GiftFinder from './scenes/giftfinder';
import Dashboard from './scenes/dashboard';
import RetrievePage from './scenes/retrievepage';



function App() {
  return (
    <div className="app">
      {/* <NavBar/> */}
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Register/>} />
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
          <Route path='giftexchange4' element={<GiftExchangePage4/>}/>
          <Route path='giftfinder' element={<GiftFinder/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='retrieve' element={<RetrievePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
