// src/pages/Home.tsx
import NavigationBar from "../components/NavigationBar";
import "../globals.css";

const Home = () => {
  return (
    <div className="layout-wrapper">
      <img src="/buy_sell.jpg" alt="Logo" width={180} height={138} />
      <NavigationBar />
    </div>
  );
};

export default Home;
