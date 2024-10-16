import { Outlet } from 'react-router-dom';
import Sidebar from '../component/Sidebar';
import Header from '../pages/dashboard/Header.jsx'



const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main grid container */}
      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <div className="col-span-2 bg-white shadow-lg min-h-screen">
          <Sidebar/>
        </div>

        {/* Main content area */}
        <div className="col-span-10">
          {/* Header section */}
          <div className="w-full bg-white shadow-sm">
            <Header/>
          </div>
          
          {/* Main content section */}
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;