import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import '../styles/global.css';  // Import the global CSS file

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}
