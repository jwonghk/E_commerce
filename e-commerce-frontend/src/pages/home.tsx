// src/pages/Home.tsx
import NavigationBar from "../components/NavigationBar";
import "../globals.css";
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="layout-wrapper">
      <div className="home-header">
        <img src="/buy_sell.jpg" alt="Logo" width={180} height={138} />
        {user.username && user.email ? (
          <div className="user-welcome-banner">
            <p className="welcome-line">Welcome back, <strong>{user.username}</strong>!</p>
            <p className="email-line">{user.email}</p>
          </div>
        ) : null}
      </div>
      <NavigationBar />
    </div>
  );
};

export default Home;
