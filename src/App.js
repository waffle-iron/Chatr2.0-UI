import React from 'react';

// Components
import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import LogoutModal from './components/LogoutModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';

function App(props) {
  const authStore = props.authStore;
  const channelStore =props.channelStore;
  return (
    <div className="content-wrapper">
      <NavBar authStore={authStore}
              channelStore={channelStore}
      />
      
      <LogoutModal authStore={authStore}/>
      <LoginModal authStore={authStore}/>
      <SignupModal authStore={authStore}/>
      <Footer />
    </div>
  );
}

export default App;
