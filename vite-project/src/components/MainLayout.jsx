
// MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

const MainLayout = () => (
  <div>
    <Header />
    <Outlet /> {/* Renders the content of each route */}
  </div>
);

export default MainLayout;
